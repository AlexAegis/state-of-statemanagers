import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 * A Facade like this is not necessary, but it helps reusability
 */
@Injectable({ providedIn: 'root' })
export class CounterStoreFacade {
	changes$ = of();
	count$ = of();
	loading$ = of();

	constructor() {}

	increment(_amount?: number) {}

	decrement(_amount?: number) {}

	slowIncrement(_amount?: number) {}

	slowDecrement(_amount?: number) {}
}
