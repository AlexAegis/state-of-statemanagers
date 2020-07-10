import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

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
		...(environment.production ? [] : [AkitaNgDevtools.forRoot({})]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
