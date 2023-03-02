import { OrdersDal } from "../dal/orders.dal";

export class OrdersService {

  public async createOrder(order: any) {
    const dal = new OrdersDal();
    const res = dal.createOrder(order);
    return res;
  }

  public async getOrdersByID(params: any){
    const dal = new OrdersDal();
    const res = dal.getOrdersByID(params);
    return res;
  }

}