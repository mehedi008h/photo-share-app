import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../domain/response";
import { Code } from "../enum/code.enum";
import { Status } from "../enum/status.enum";
import { IUser } from "../interfaces/user.interface";

import User from "../models/user.model";

import { sendToken } from "../utils/jwtToken";

// register user
export const registerUser = async (
    req: Request,
    res: Response
): Promise<Response | void> => {
    const { name, email, password } = req.body;

    try {
        const user: IUser = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "result.public_id",
                url: "result.secure_url",
            },
        });

        sendToken(user, 200, res);
    } catch (error: any) {
        console.error(error);
        res.status(Code.INTERNAL_SERVER_ERROR).send(
            new HttpResponse(
                Code.INTERNAL_SERVER_ERROR,
                Status.INTERNAL_SERVER_ERROR,
                "An error occurred"
            )
        );
    }
};

// register user
export const loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return res.send(
            new HttpResponse(
                Code.BAD_REQUEST,
                Status.BAD_REQUEST,
                "Invalid Email or Password"
            )
        );
    }

    // Finding user in database
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.send(
            new HttpResponse(
                Code.BAD_REQUEST,
                Status.BAD_REQUEST,
                "Invalid Email or Password"
            )
        );
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.matchPassword(password);

    if (!isPasswordMatched) {
        return res.send(
            new HttpResponse(
                Code.BAD_REQUEST,
                Status.BAD_REQUEST,
                "Invalid Email or Password"
            )
        );
    }

    sendToken(user, 200, res);
};

export const loggedInUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {};
