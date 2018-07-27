/**
 * Just a helper class to be used to inject the text to be put on an order state item {@link OrderEntity.orderStateText}
 * You don't need to use this,you can use your own declared interface for that or you can just use a direct string.
 */
export enum OrderStateTextUtil {
  ORDER_PROCESSED = 'Order Processed',
  ORDER_APPROVED = 'Order Approved',
  ORDER_DECLINED = 'Order Declined',
  ORDER_SHIPPED = 'Order Shipped',
  ORDER_IN_TRANSIT = 'Order In Transit',
  ORDER_DELIVERED = 'Order Delivered'
}
