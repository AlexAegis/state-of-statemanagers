import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { debounceTime, exhaustMap, mapTo, mergeMap, take } from 'rxjs/operators';
import { noop } from '../../store/root-store.actions';
import { CounterActions } from './actions';

@Injectable()
export class CounterEffects {
	numberOfChanges$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CounterActions.increment, CounterActions.decrement),
			mapTo(CounterActions.change())
		)
	);

	debouncedSlowActions$ = this.actions$.pipe(
		ofType(CounterActions.slowIncrement, CounterActions.slowDecrement),
		debounceTime(500)
	);

	slowChangeStart$ = createEffect(() =>
		this.debouncedSlowActions$.pipe(mapTo(CounterActions.slowOperationStart()))
	);

	slowChange$ = createEffect(() =>
		this.debouncedSlowActions$.pipe(
			mergeMap((i) => timer(2000).pipe(take(1), mapTo(i))),
			exhaustMap((change) => {
				switch (change.type) {
					case CounterActions.slowDecrement.type:
						return [
							CounterActions.decrement(change),
							CounterActions.slowOperationOver(),
						];
					case CounterActions.slowIncrement.type:
						return [
							CounterActions.increment(change),
							CounterActions.slowOperationOver(),
						];
					default:
						return [noop];
				}
			})
		)
	);

	constructor(private actions$: Actions) {}
}
