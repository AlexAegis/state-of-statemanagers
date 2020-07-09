import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './counter.effects';
import * as fromCounter from './reducers/counter.reducers';

@NgModule({
	imports: [
		StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
		EffectsModule.forFeature([CounterEffects]),
	],
})
export class CounterStoreModule {}
