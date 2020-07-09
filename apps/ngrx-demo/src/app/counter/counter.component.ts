import { Component, OnInit } from '@angular/core';
import { CounterStoreFacade } from './store/counter-store.facade';

@Component({
	selector: 'state-of-statemanagers-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
	constructor(public readonly counterStoreFacade: CounterStoreFacade) {}

	ngOnInit(): void {}
}
