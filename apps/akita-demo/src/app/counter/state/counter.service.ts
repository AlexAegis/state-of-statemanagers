import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { debounceTime, mapTo, mergeMap, take, tap } from 'rxjs/operators';
import { CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterService implements OnDestroy {
	debouncer = new Subject<() => void>();

	private subs = new Subscription();

	constructor(private counterStore: CounterStore) {
		// Because there are no concept of effects, I have to manage my subscriptions myself
		this.subs.add(
			this.debouncer
				.pipe(
					debounceTime(500),
					tap(() => this.slowOperationStart()),
					mergeMap((i) => timer(2000).pipe(take(1), mapTo(i))),
					tap((action) => {
						action();
						this.slowOperationOver();
					})
				)
				.subscribe()
		);
	}

	/** This function is an action, and a reducer in one */
	increment(amount: number = 1) {
		this.counterStore.update((state) => ({
			...state,
			count: state.count + amount,
			changes: state.changes + 1,
		}));
	}

	decrement(amount: number = 1) {
		this.counterStore.update((state) => ({
			...state,
			count: state.count - amount,
			changes: state.changes + 1,
		}));
	}

	slowIncrement(amount: number = 1) {
		this.debouncer.next(() => this.increment(amount));
	}

	slowDecrement(amount: number = 1) {
		this.debouncer.next(() => this.decrement(amount));
	}

	slowOperationStart() {
		this.counterStore.update((state) => ({ ...state, longProcesses: state.longProcesses + 1 }));
	}

	slowOperationOver() {
		this.counterStore.update((state) => ({ ...state, longProcesses: state.longProcesses - 1 }));
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}
}
