import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {dateTimeRegexp} from "../../../utils/date.utils";
import {ITicket} from "../../../core/models/ticket.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-form-resolver',
  templateUrl: './form-resolver.component.html',
  styleUrls: ['./form-resolver.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormResolverComponent implements OnInit, OnDestroy {
  destroy$$ = new Subject();
  @Output() addedTicket = new EventEmitter<ITicket[]>();

  routesForm!: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.routesForm = this.fb.array([]);
    this.addTicket();

    this.routesForm.valueChanges
      .pipe(takeUntil(this.destroy$$))
      .subscribe(v => {
        if (this.routesForm.valid) {
          this.addedTicket.emit(v);
        }
      })
  }

  addTicket(): void {
    const control: FormGroup = this.fb.group({
        id: [Date.now()],
        departurePlace: ['', [Validators.required]],
        departureTime: ['', [Validators.required, Validators.pattern(dateTimeRegexp)]],
        arrivalPlace: ['', [Validators.required]],
        arrivalTime: ['', [Validators.required, Validators.pattern(dateTimeRegexp)]],
    });

    (this.routesForm as FormArray).push(control)
  }

  ngOnDestroy() {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
