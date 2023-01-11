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
    if(data?.email === user.email){
        return true;
    }
    return false;
  }

  public static async getuser(param: any){
    const data = await User.aggregate([
      { $match: { email: param.email } },
    ]);
    /*if(data[0].bag_items.length > 0) return {status : "full", data : data[0]};
    return {status : "empty", data : data[0]};*/
    return data[0];
  }
}
