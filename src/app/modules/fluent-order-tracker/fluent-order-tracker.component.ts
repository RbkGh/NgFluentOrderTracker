import {Component, Input, OnInit} from '@angular/core';
import {OrderStateTextUtil} from '../../util/order-state-text.enum';
import {OrderState} from '../../models/order-state.enum';
import {OrderEntity} from '../../models/order-entity';


@Component({
  selector: 'app-fluent-order-tracker',
  templateUrl: './fluent-order-tracker.component.html',
  styleUrls: ['./fluent-order-tracker.component.css']
})
export class FluentOrderTrackerComponent implements OnInit {
  orderStateTextUtil: OrderStateTextUtil;
  orderState: OrderState;
  orderEntity: OrderEntity;
  @Input()
  public orderEntities: Array<OrderEntity> = [];

  constructor() {
  }

  ngOnInit() {
    this.initComponent();
  }

  initComponent(): void {
  }

}
