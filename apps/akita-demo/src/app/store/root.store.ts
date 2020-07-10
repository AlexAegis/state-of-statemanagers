import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface RootState {
	key: string;
}

export function createInitialState(): RootState {
	return {
		key: '',
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'root' })
export class RootStore extends Store<RootState> {
	constructor() {
		super(createInitialState());
	}
}
