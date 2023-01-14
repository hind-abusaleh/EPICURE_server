import Users from "../db/models/users";
import HistoryOrders from "../db/models/historyOrders";

export class HistoryOrdersDal {
  public async createHistoryOrder(historyOrder: any) {
    historyOrder = new HistoryOrders({
      orders_id : historyOrder.orders_id,
      date : historyOrder.date,
      total_price : historyOrder.total_price,
      user_email : historyOrder.user_email,
      full_name : historyOrder.full_name,
      address : historyOrder.address,
      phone : historyOrder.phone,
    });

    const response = await HistoryOrders.create(historyOrder);

    const result = await Users.findOne({ email: response.user_email }).updateOne({
      $push: { history_orders: response._id },
    });
    
    return response;
  }

  public findAll() {
    return HistoryOrders.find();
  }

  public async getHistoryOrdersByID(param: any){
    
    return await HistoryOrders.findOne({ _id: param.id })
  }

}
