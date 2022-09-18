import { Document } from "mongoose";

export default interface IUser extends Document {
    name: string;
    email: string;
    address: string;
    work: string;
    password: string;
    role: string;
    active: true;
    createdAt: string;

    getResetPasswordToken(): string;
    getSignedToken(): string;
    resetPasswordToken: string | undefined;
    resetPasswordExpire: string | undefined;
    matchPassword(password: string): boolean | PromiseLike<boolean>;
}
