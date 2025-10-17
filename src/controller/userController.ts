import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
    static async getuser(req: Request, res: Response) {
        return UserService.getUser(req, res);
    }
}