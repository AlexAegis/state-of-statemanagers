export interface Counter {
	id: number | string;
}

export function createCounter(params: Partial<Counter>) {
	return {} as Counter;
}
