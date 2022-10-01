import { Document } from "mongoose";

export interface IPhoto extends Document {
    title: string;
    content: string;
    tags: [
        {
            tag: string;
        }
    ];
    photo: {
        public_id: string;
        url: string;
    };

    userId: string;
    createdAt: string;
}
