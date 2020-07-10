import { Component, OnInit } from '@angular/core';
import { CounterQuery } from './state/counter.query';
import { CounterService } from './state/counter.service';

@Component({
	selector: 'state-of-statemanagers-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
	constructor(
		public readonly counterService: CounterService,
		public readonly counterQuery: CounterQuery
	) {}

	ngOnInit(): void {}
}
