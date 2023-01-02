import Chefs from "../db/models/chefs";

export class ChefsDal {
  public createChef(chef: any) {
    chef = new Chefs({
      name: chef.name,
      age: chef.age,
      img: chef.img,
      about: chef.about,
      new: chef.new,
      most_viewd: chef.most_viewd,
      top_chef: chef.top_chef,
      chefsRestaurants: chef.chefsRestaurants,
      chefsDishes: chef.chefsDishes
    });

    chef.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { age: chef.age } });
    return data;
  }

  public findAll(query: any = null) {
    return Chefs.find(query);
  }
  
  public async getTopChef() {
    const data = await Chefs.aggregate([
      { $match: { top_chef: true } },
      
    ]);
    return data;
  }
  public async getChef(param: { [key: string]: string }) {
    const data = await Chefs.aggregate([
      { $match: { name: `${param.name}` } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }
}
