import { Users } from './../entity/Users';
import { typeormConfig } from "../config/index";
import { NextFunction, Request, Response } from "express";


export class userController {

    // create user
    static async userCreate(req: Request, res: Response, next: NextFunction) {

        try {
            let { fullName, email, password, userName, phoneNumber } = req.body

            let userModel = typeormConfig.getRepository(Users)
            let existUser = await userModel.findOne({
                where: [
                    { email: email },
                    { userName: userName }
                ]
            })

            if (existUser) {
                return res.status(409).send({
                    success: false,
                    message: "Already exist user"
                })
            }

            // new user
            let newUser = userModel.create({
                fullName,
                email,
                password,
                userName,
                phoneNumber
            })

            await userModel.save(newUser)

            return res.status(201).send({
                success: true,
                message: "User created successfully",
                data: newUser
            });


        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.message || `An error occurred while updating the categorie`
                })
            } else {
                return res.status(500).send({
                    success: false,
                    message: `An error occurred while updating the categorie`
                })
            }
        }
    }



    // read users data
    static async userGet(req: Request, res: Response, next: NextFunction) {

        try {
            const userModel = typeormConfig.getRepository(Users)
            
            
            let dataUsers = await userModel.find()

            return res.status(200).send({
                success: true,
                message: "Users data",
                data: dataUsers
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.message || `An error occurred while updating the categorie`
                })
            } else {
                return res.status(500).send({
                    success: false,
                    message: `An error occurred while updating the categorie`
                })
            }
        }

    }
}


