import { Request, Response } from "express";
import { HistoryOrdersService } from "../services/historyOrders.service";

export class HistoryOrdersController {
  
  public static async createHistoryOrder(req: Request, res: Response) {
    const params = req.body;
    const service = new HistoryOrdersService();
    const order = await service.createHistoryOrder(params);
    return res.send(order);
  }
  public static async getHistoryOrdersByID(req: Request, res: Response){
    const params = req.body;
    const service = new HistoryOrdersService();
    const orders = await service.getHistoryOrdersByID(params);
    return res.send(orders);
  }

}