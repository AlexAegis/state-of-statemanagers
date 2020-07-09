import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState {
	slowProcesses: number;
	count: number;
	changes: number;
}

export interface State extends fromRoot.State {
	[counterFeatureKey]: CounterState;
}

const initialState: CounterState = {
	slowProcesses: 0,
	count: 0,
	changes: 0,
};

export const reducer = createReducer(
	initialState,
	on(CounterActions.increment, (state, { amount = 1 }) => ({
		...state,
		count: state.count + amount,
	})),
	on(CounterActions.decrement, (state, { amount = 1 }) => ({
		...state,
		count: state.count - amount,
	})),
	on(CounterActions.slowOperationStart, (state) => ({
		...state,
		slowProcesses: state.slowProcesses + 1,
	})),
	on(CounterActions.slowOperationOver, (state) => ({
		...state,
		slowProcesses: state.slowProcesses - 1,
	})),
	on(CounterActions.loadingChange, (state, { loading }) => ({ ...state, loading })),
	on(CounterActions.change, (state) => ({ ...state, changes: state.changes + 1 }))
);

// Selectors can be in a separate file or next to the reducer.

export const selectCounterState = createFeatureSelector<State, CounterState>(counterFeatureKey);

export const selectCount = createSelector(selectCounterState, (state) => state.count);
export const selectLoading = createSelector(selectCounterState, (state) => state.slowProcesses > 0);
export const selectChanges = createSelector(selectCounterState, (state) => state.changes);
