import { Request, Response } from "express";
import { HttpResponse } from "../domain/response";
import { Code } from "../enum/code.enum";
import { Status } from "../enum/status.enum";
import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";

// register user
export const registerUser = async (
    req: Request,
    res: Response
): Promise<Response<IUser>> => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "result.public_id",
                url: "result.secure_url",
            },
        });

        console.log(user);

        return res
            .status(Code.CREATED)
            .send(
                new HttpResponse(
                    Code.CREATED,
                    Status.CREATED,
                    "User created",
                    user
                )
            );
    } catch (error: any) {
        console.error(error);
        return res
            .status(Code.INTERNAL_SERVER_ERROR)
            .send(
                new HttpResponse(
                    Code.INTERNAL_SERVER_ERROR,
                    Status.INTERNAL_SERVER_ERROR,
                    "An error occurred"
                )
            );
    }
};
