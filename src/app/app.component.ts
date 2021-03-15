import { Component } from '@angular/core';
import {ITicket} from "./core/models/ticket.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tickets: ITicket[] = [];
}
