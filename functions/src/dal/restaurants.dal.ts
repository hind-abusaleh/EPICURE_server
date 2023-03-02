import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";
import Cuisine from "../db/models/cuisines";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.name,
      chef: restaurant.chef,
      img: restaurant.img,
      opening_hour: restaurant.opening_hour,
      closing_hour: restaurant.closing_hour,
      new: restaurant.new,
      popular: restaurant.popular,
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      address: restaurant.address,
      restaurantDishes: restaurant.restaurantDishes
    });

    const response = await Restaurants.create(restaurant);
    await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { chefsRestaurants: response._id },
    });
     await Cuisine.findOne({ name: response.cuisine }).updateOne({
        $push: { Restaurants: response._id },
      });
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }

  public async getPopularRestaurants(){
    const data = await Restaurants.aggregate([
      { $match: { popular: true } },
      
    ]);
    return data;
  }
}
