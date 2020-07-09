import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { fromEvent, merge, timer } from 'rxjs';
import { mapTo, switchMapTo } from 'rxjs/operators';
import * as RootStoreActions from './root-store.actions';

@Injectable()
export class UserEffects {
	clicks$ = fromEvent(document, 'click');
	keys$ = fromEvent(document, 'keydown');
	mouse$ = fromEvent(document, 'mousemove');

	// Effects doesn't neccessarily have to originate from actions
	idle$ = createEffect(() =>
		merge(this.clicks$, this.keys$, this.mouse$).pipe(
			switchMapTo(timer(10 * 1000)), // 10 second nactivity timeout
			mapTo(RootStoreActions.idling())
		)
	);
}
