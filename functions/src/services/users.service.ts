import { UsersDal } from "../dal/users.dal";
import bcrypt = require("bcrypt");

export class UsersService {

    public static async login(args: any) {
        const hashedPasswordFromDB = await UsersDal.getUserPassword(args);
        if(!hashedPasswordFromDB){
            return {status: "failure", message: "Incorrect username or password"};
        }
        const response = await bcrypt.compare(args.password, hashedPasswordFromDB);
        if(response){
            return {status: "success", message: "Welcome!"};
        }
        return {status: "failure", message: "Incorrect username or password"};
    };

    public static async register(user: any) {
        const saltRounds = 10;
        const isUserExist = await UsersDal.compareEmails(user);
        if(isUserExist){
            return {status: "failure", message: "User already exists"};
        }
        
        bcrypt.hash(user.password, saltRounds, async function (err: any, hash: any) {
            user["password"] = hash;
            const res = await UsersDal.createUser(user);
            return res;
        });
    };
    public static async getuser(args:any){
        const res = UsersDal.getuser(args);
        return res;
    };
    public static async updateUsersBag(args:any){
        const res = UsersDal.updateUsersBag(args);
        return res;
    };
    public static async getLastHistoryOrder(args:any){
        const res = UsersDal.getLastHistoryOrder(args);
        return res;
    }
};