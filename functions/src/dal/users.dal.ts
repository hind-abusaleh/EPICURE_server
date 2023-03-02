import User from "../db/models/users";

export class UsersDal {
  public static async createUser(user: any) {
    user = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });

    user.save(function (err: any, results: any) {
      return results;
    });
  }

  public static async getUserPassword(user: any) {
    const data = await User.findOne({
      email: user.email,
    });
    return data?.password;
  }

  public static async compareEmails(user: any) {
    const data = await User.findOne({
      email: user.email,
    });
    if (data?.email === user.email) {
      return true;
    }
    return false;
  }

  public static async getuser(param: any) {
    const data = await User.aggregate([
      { $match: { email: param.email } },
    ]);
    return data[0];
  }

  public static async updateUsersBag(param: any) {
     await User.updateOne({ email: param.email }, { $set: { 'bag_items': [] } })
    return;
  }
  public static async getLastHistoryOrder(param: any){
    const data = await User.aggregate([
      { $match: { email: param.email } },
    ]);
    const len = data[0].history_orders.length;
    if( len > 0) return  data[0].history_orders[len-1];
    return;
  }
}
