import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluentOrderTrackerComponent } from './fluent-order-tracker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FluentOrderTrackerComponent],
  exports : [FluentOrderTrackerComponent]
})
export class FluentOrderTrackerModule { }
