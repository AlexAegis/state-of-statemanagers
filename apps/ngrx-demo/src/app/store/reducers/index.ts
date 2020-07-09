import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'apps/ngrx-demo/src/environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
	router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
	router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
	return (state, action): any => {
		const result = reducer(state, action);
		console.groupCollapsed(action.type);
		console.log('prev state', state);
		console.log('action', action);
		console.log('next state', result);
		console.groupEnd();
		return result;
	};
}

const persistent = ['auth'];

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
	return localStorageSync({ keys: persistent, rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [
	localStorageSyncReducer,
	...(environment.production ? [] : [logger]),
];
