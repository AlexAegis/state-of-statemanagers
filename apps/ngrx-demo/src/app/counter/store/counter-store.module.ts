import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
	imports: [StoreModule.forFeature('counter', [])],
})
export class CounterStoreModule {}
