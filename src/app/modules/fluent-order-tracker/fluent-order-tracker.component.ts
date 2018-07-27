import {Component, Input, OnInit} from '@angular/core';
import {OrderEntity} from './models/order-entity';
import {OrderState} from './models/order-state.enum';

@Component({
  selector: 'app-fluent-order-tracker',
  templateUrl: './fluent-order-tracker.component.html',
  styleUrls: ['./fluent-order-tracker.component.css']
})
export class FluentOrderTrackerComponent implements OnInit {

  constructor() {
  }

  @Input()
  public orderEntities: Array<OrderEntity> = [];
  public steps = 0;

  ngOnInit() {
    this.initComponent();
  }

  initComponent(): void {
  }

}
