import Users from "../db/models/users";
import Orders from "../db/models/orders";

export class OrdersDal {
  public async createOrder(order: any) {
    order = new Orders({
      dish_name : order.dish_name,
      dish_img : order.dish_img,
      dish_id : order.dish_id,
      user_email : order.user_email,
      price : order.price,
      changes : order.changes,
      side : order.side,
      quantity : order.quantity 
    });

    const response = await Orders.create(order);

    const result = await Users.findOne({ email: response.user_email }).updateOne({
      $push: { bag_items: response._id },
    });
    
    return response;
  }

  public findAll() {
    return Orders.find();
  }

  public async getOrdersByID(param: any){
    return Orders.find( { _id : { $in : param } } );
  }

}
