import { DishesDal } from "../dal/dishes.dal";

export class DishesService {
  public async getDishes() {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async getPopularDishes(){
    const dal = new DishesDal();
    const res = await dal.getPopularDishes();
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
    const res = dal.createDish(dish);
    return res;
  }

  public async getDishesByID(params: any){
    const dal = new DishesDal();
    const res = dal.getDishesByID(params);
    return res;
  }

  public async getDishesByType_ResName(params: any){
    const dal = new DishesDal();
    const res = dal.getDishesByType_ResName(params);
    return res;
  }
}