import express from "express";
import { UserController } from "../controller/userController";

const userRoute = express.Router();

userRoute.get('/me', UserController.getuser);

export default userRoute;