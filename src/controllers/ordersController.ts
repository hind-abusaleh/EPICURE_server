import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";

export class OrdersController {
  
  public static async createOrder(req: Request, res: Response) {
    const params = req.body;
    const service = new OrdersService();
    const order = await service.createOrder(params);
    return res.send(order);
  }
  public static async getOrdersByID(req: Request, res: Response){
    const params = req.body;
    const service = new OrdersService();
    const orders = await service.getOrdersByID(params);
    return res.send(orders);
  }

}