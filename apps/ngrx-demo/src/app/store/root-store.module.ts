import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { metaReducers } from './reducers';

@NgModule({
	imports: [
		StoreModule.forRoot(
			{ router: routerReducer },
			{
				metaReducers,
				runtimeChecks: {
					// strictStateImmutability and strictActionImmutability are enabled by default
					strictStateSerializability: true,
					strictActionSerializability: true,
					strictActionWithinNgZone: true,
				},
			}
		),
		StoreRouterConnectingModule.forRoot(),
		StoreDevtoolsModule.instrument({
			name: 'NgRX Demo App',
			logOnly: !environment.production,
		}),
		EffectsModule.forRoot([]),
	],
})
export class RootStoreModule {}
