import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import { IUser } from "../interfaces/user.interface";

const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            maxLength: [30, "Your name cannot exceed 30 characters"],
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, "Please enter your email"],
            match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please use a valid address",
            ],
            unique: true,
        },
        phone: {
            type: String,
            required: [false, "Please enter your phone number"],
            maxLength: [200, "Your phone number cannot exceed 200 characters"],
        },
        address: {
            type: String,
            required: [false, "Please enter your address"],
            maxLength: [200, "Your address cannot exceed 200 characters"],
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minlength: [6, "Your password must be longer than 6 characters"],
            select: false,
        },
        avatar: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        role: {
            type: String,
            default: "user",
        },
        active: { type: Boolean, default: true },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    { timestamps: true }
);

// Encrypting password before saving user
UserSchema.pre<IUser>("save", async function (next: any) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare user password
UserSchema.methods.matchPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

// Return JWT token
UserSchema.methods.getSignedToken = function (password: string) {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Generate password reset token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
};

export default model<IUser>("User", UserSchema);
