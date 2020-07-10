import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CounterState {
	count: number;
	changes: number;
	longProcesses: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<CounterState> {
	constructor() {
		super({
			changes: 0,
			count: 0,
			longProcesses: 0,
		});
	}
}
