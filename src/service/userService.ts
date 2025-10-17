import { Request, Response } from "express";
import { GetCatFacts } from "./catService";

export class UserService {
  static async getUser(req: Request, res: Response) {
    try {
      const user = {
        email: "joelchimaobichukwu@gmail.com",
        name: "Chukwu Joel Chimaobi",
        stack: "Node.js/Express"
      };

      const fact = await GetCatFacts.getCatFacts();
      const timestamp = new Date().toISOString();

      return res.status(200).json({
        status: "success",
        user,
        timestamp,
        fact
      });
    } catch (error) {
      console.error("Error in getUser:", error);
      return res.status(500).json({
        status: "error",
        message: "An unexpected error occurred"
      });
    }
  }
}