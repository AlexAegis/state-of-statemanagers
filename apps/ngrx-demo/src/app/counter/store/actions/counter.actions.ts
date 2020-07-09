import { createAction, props } from '@ngrx/store';

// You don't have to declare types of the actions, most of the time they are unique.
// But when they are generic, why not declare them separately and re-use
export type NumericalChange = { amount?: number };
export type LoadingChange = { loading: boolean };

export const slowIncrement = createAction('[Counter] Slow Increase', props<NumericalChange>());
export const slowDecrement = createAction('[Counter] Slow Decrement', props<NumericalChange>());
export const slowOperationStart = createAction('[Counter] Slow Operation Start');
export const slowOperationOver = createAction('[Counter] Slow Operation Over');
export const increment = createAction('[Counter] Increase', props<NumericalChange>());
export const decrement = createAction('[Counter] Decrement', props<NumericalChange>());
export const change = createAction('[Counter] Change');
export const loadingChange = createAction('[Counter] Loading Change', props<LoadingChange>());

// const exampleIncrementAction = increment({ amount: 21 });
// exampleIncrementAction.amount; // number (21)
// exampleIncrementAction.type; // [Counter] Increase
