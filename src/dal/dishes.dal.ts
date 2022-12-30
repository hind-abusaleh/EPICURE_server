import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";
import Dishes from "../db/models/dishes";

export class DishesDal {
  public async createDish(dish: any) {
    dish = new Dishes({
      name: dish.name,
      content: dish.content,
      img: dish.img,
      icon: dish.icon,
      price: dish.price,
      popular: dish.popular,
      dishType: dish.dishType,
      chef: dish.chef,
      restaurant: dish.restaurant
    });

    const response = await Dishes.create(dish);
    const result = await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { chefsDishes: response._id },
    });
    const result2 = await Restaurants.findOne({ name: response.restaurant }).updateOne({
        $push: { restaurantDishes: response._id },
      });
    return response;
  }

  public findAll() {
    return Dishes.find();
  }
}
