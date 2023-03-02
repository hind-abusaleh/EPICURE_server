import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class AuthController {
  public static async login(req: Request, res: Response){
    const args = req.body;
    const user = await UsersService.login(args);
    res.send(user);
  };
public static async register(req: Request, res: Response) {
    const args = req.body;
    const user = await UsersService.register(args);
    res.send(user);
};
public static async getuser(req: Request, res: Response){
    const args = req.body;
    const items = await UsersService.getuser(args);
    res.send(items);
}
public static async updateUsersBag(req: Request, res: Response){
  const args = req.body;
  const items = await UsersService.updateUsersBag(args);
  res.send(items);
}
public static async getLastHistoryOrder(req: Request, res: Response){
  const args = req.body;
  const items = await UsersService.getLastHistoryOrder(args);
  res.send(items);
}
};