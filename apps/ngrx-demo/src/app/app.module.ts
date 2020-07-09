import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		RouterModule.forRoot([
			{
				path: 'counter',
				loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule),
			},
			{
				path: 'comms',
				loadChildren: () => import('./comms/comms.module').then((m) => m.CommsModule),
			},
		]),
		RootStoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
