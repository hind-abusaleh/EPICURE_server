import { HistoryOrdersDal } from "../dal/historyOrders.dal";

export class HistoryOrdersService {

  public async createHistoryOrder(order: any) {
    const dal = new HistoryOrdersDal();
    const res = dal.createHistoryOrder(order);
    return res;
  }

  public async getHistoryOrdersByID(params: any){
    const dal = new HistoryOrdersDal();
    const res = dal.getHistoryOrdersByID(params);
    return res;
  }

}