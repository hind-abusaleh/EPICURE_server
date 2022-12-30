import { CuisinesDal } from "../dal/cuisine.dal";

export class CuisinesService {
public async getCuisines() {
 const dal = new CuisinesDal();
 const res = await dal.findAll();
 return res;
};

public async createCuisines(cuisine: any) {
    const dal = new CuisinesDal();
    const res = dal.createCuisine(cuisine);
    return res;
  }

};