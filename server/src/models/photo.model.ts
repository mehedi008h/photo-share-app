import { model, Schema } from "mongoose";
import { IPhoto } from "../interfaces/photo.interface";

const PhotoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter photo title"],
        },
        content: {
            type: String,
            required: false,
        },
        tags: [
            {
                tag: {
                    type: String,
                },
            },
        ],
        photo: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export default model<IPhoto>("Photo", PhotoSchema);
