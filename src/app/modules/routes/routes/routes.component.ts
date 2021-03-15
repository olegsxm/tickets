import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ITicket} from "../../../core/models/ticket.model";
import {compareDatesUtil} from "../../../utils/date.utils";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutesComponent implements OnInit {
  @Input() set tickets(value: ITicket[]) {
    this.routes.clear();
    value.forEach(ticket => {
      const tempValue = [ticket.arrivalPlace];
      const arrivals = value.filter(t => t.departurePlace === ticket.arrivalPlace && compareDatesUtil(ticket.arrivalTime, t.departureTime));

      if (arrivals.length > 0) {
        tempValue.push(...arrivals.map(_a => _a.arrivalPlace))
      }

      if (this.routes.has(ticket.departurePlace)) {
        this.routes.set(ticket.departurePlace, [...this.routes.get(ticket.departurePlace) ?? [], ...tempValue])
      } else {
        this.routes.set(ticket.departurePlace, tempValue)
      }
    })
  }

  routes: Map<string, string[]> = new Map<string, string[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  originOrder() {
    return 0;
  }
}
