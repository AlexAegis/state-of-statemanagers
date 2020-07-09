import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@state-of-statemanagers/api-interfaces';

@Component({
  selector: 'state-of-statemanagers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
