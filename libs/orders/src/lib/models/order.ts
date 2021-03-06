import { User } from '@esohp/users';
import { OrderItem } from './order-item';

export interface Order {
  id?: string;
  orderItems?: OrderItem;
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: number;
  totalPrice?: string;
  user?: User;
  dateOrdered?: string;
}

export interface OrdersDto {
  message: string;
  Orders?: Order[];
  order?: Order;
}
export interface orderCountDto {
  message: string;
  OrderCount: number;
}
export interface totalSalesDto {
  message: string;
  totalSales: number;
}
