import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { CounterState, CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterState> {
	count$ = this.select('count');
	changes$ = this.select('changes');
	longProcesses$ = this.select('longProcesses');
	// computed propert not memoized unless I memoize it myself or make it part
	// of the state
	loading$ = this.longProcesses$.pipe(map((lp) => lp > 0));

	constructor(protected store: CounterStore) {
		super(store);
	}
}
