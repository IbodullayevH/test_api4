import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter = Router()

userRouter.post("/user/create", userController.userCreate)
userRouter.get("/user/data", userController.userGet)

export {userRouter}