import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterActions } from './actions';
import { CounterFeature } from './reducers';

/**
 * A Facade like this is not necessary, but it helps reusability
 */
@Injectable({ providedIn: 'root' })
export class CounterStoreFacade {
	changes$ = this.store.pipe(select(CounterFeature.selectChanges));
	count$ = this.store.pipe(select(CounterFeature.selectCount));
	loading$ = this.store.pipe(select(CounterFeature.selectLoading));

	constructor(private readonly store: Store<CounterFeature.State>) {}

	increment(amount?: number) {
		this.store.dispatch(CounterActions.increment({ amount }));
	}

	decrement(amount?: number) {
		this.store.dispatch(CounterActions.decrement({ amount }));
	}

	slowIncrement(amount?: number) {
		this.store.dispatch(CounterActions.slowIncrement({ amount }));
	}

	slowDecrement(amount?: number) {
		this.store.dispatch(CounterActions.slowDecrement({ amount }));
	}
}
