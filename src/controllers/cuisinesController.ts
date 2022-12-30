import { Request, Response } from "express";
import { CuisinesService } from "../services/cuisines.service";
export class cuisinesController {
public static async getCuisines(req: Request, res: Response) {
    try {
        const service = new CuisinesService();
        const cuisines = await service.getCuisines();
        return res.send(cuisines);
      } catch (error) {
        return res.send(error);
      }
};
public static async createCuisines(req: Request, res: Response) {
    try {
        const params = req.body;
        const service = new CuisinesService();
        const cuisine = await service.createCuisines(params);
        return res.status(200).send("cuisine successfully created");
      } catch (error) {
        return res.send(error);
      }
};
};