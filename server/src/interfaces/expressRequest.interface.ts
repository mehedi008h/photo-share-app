import { Request } from "express";
import { IUser } from "./user.interface";

export interface ExpressRequest extends Request {
    user?: IUser | any;
}
