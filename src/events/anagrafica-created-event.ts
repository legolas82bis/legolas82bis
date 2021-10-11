import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface AnagraficaCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
   
  };
}
