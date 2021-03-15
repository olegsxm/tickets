import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { FormResolverComponent } from './form-resolver/form-resolver.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [FormResolverComponent, TicketComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormResolverComponent]
})
export class FormResolverModule { }
