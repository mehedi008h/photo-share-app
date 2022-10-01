import { Response } from "express";
import { HttpResponse } from "../domain/response";
import { Code } from "../enum/code.enum";
import { Status } from "../enum/status.enum";
import { ExpressRequest } from "../interfaces/expressRequest.interface";
import { IPhoto } from "../interfaces/photo.interface";
import Photo from "../models/photo.model";

export const addNewPhoto = async (
    req: ExpressRequest,
    res: Response
): Promise<Response | void> => {
    const { title, content, tags } = req.body;

    try {
        const photo: IPhoto = await Photo.create({
            title,
            content,
            tags,
            photo: {
                public_id: "result.public_id",
                url: "result.secure_url",
            },
            userId: req.user.id,
        });

        res.status(Code.OK).send(
            new HttpResponse(Code.OK, Status.OK, "Post Successfully", photo)
        );
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
