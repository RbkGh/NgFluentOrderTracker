import {Component, OnInit} from '@angular/core';
import {OrderEntity} from './models/order-entity';
import {OrderState} from './models/order-state.enum';
import {OrderStateTextUtil} from './util/order-state-text.enum';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  orderEntities: Array<OrderEntity> = [];

  ngOnInit(): void {
    this.initOrderEntities();
  }

  initOrderEntities() {
    const orderEntityProcessed: OrderEntity = {} as OrderEntity;
    orderEntityProcessed.orderState = OrderState.COMPLETED;
    orderEntityProcessed.orderStateText = OrderStateTextUtil.ORDER_PROCESSED;

    const orderEntityApproved: OrderEntity = {} as OrderEntity;
    orderEntityApproved.orderState = OrderState.DECLINED;
    orderEntityApproved.orderStateText = OrderStateTextUtil.ORDER_DECLINED;

    const orderEntityShipped: OrderEntity = {} as OrderEntity;
    orderEntityShipped.orderState = OrderState.TODO;
    orderEntityShipped.orderStateText = OrderStateTextUtil.ORDER_SHIPPED;

    const orderEntityInTransit: OrderEntity = {} as OrderEntity;
    orderEntityInTransit.orderState = OrderState.COMPLETED;
    orderEntityInTransit.orderStateText = OrderStateTextUtil.ORDER_IN_TRANSIT;

    const orderEntityDelivered: OrderEntity = {} as OrderEntity;
    orderEntityDelivered.orderState = OrderState.COMPLETED;
    orderEntityDelivered.orderStateText = OrderStateTextUtil.ORDER_DELIVERED;

    this.orderEntities.push(orderEntityProcessed);
    this.orderEntities.push(orderEntityApproved);
    this.orderEntities.push(orderEntityShipped);
    this.orderEntities.push(orderEntityInTransit);
    this.orderEntities.push(orderEntityDelivered);

  }
}
