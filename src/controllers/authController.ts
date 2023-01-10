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
};