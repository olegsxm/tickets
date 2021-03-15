import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ticket, [app-ticket]',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit {
  @Input() ticketGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
