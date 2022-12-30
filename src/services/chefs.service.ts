import { ChefsDal } from "../dal/chefs.dal";

export class ChefsService {
public async getChefs() {
 const dal = new ChefsDal();
 const res = await dal.findAll();
 return res;
};

public async createChef(chef: any) {
    const dal = new ChefsDal();
    const res = dal.createChef(chef);
    return res;
  }

};