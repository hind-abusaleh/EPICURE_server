import Cuisines from "../db/models/cuisines";

export class CuisinesDal {
  public createCuisine(cuisine: any) {
    cuisine = new Cuisines({
      name: cuisine.name,
      restaurants: cuisine.restaurants,
    });
    cuisine.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
}


  public findAll(query: any = null) {
    return Cuisines.find(query);
  }

  /*public async getChef(param: { [key: string]: string }) {
    const data = await Cuisines.aggregate([
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
  }*/
}
