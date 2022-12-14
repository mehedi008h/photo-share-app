import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import ip from "ip";
import cookieParser from "cookie-parser";

import { connectDatabase } from "../src/config/database";
import { Code } from "./enum/code.enum";
import { HttpResponse } from "./domain/response";
import { Status } from "./enum/status.enum";
import authRoutes from "./routes/auth.routes";
import photoRoutes from "./routes/photo.routes";

dotenv.config();

export class App {
    private readonly app: Application;
    private readonly APPLICATION_RUNNING = "Application is running on:";
    private readonly ROUTE_NOT_FOUND = "Route does not exist on this server.";

    constructor(
        private readonly port: string | number = process.env.SERVER_PORT || 5000
    ) {
        this.app = express();
        this.middleware();
        this.routes();
        this.initialiseDatabaseConnection();
    }

    // listning port
    listen(): void {
        this.app.listen(this.port);
        console.info(
            `${this.APPLICATION_RUNNING} ${ip.address()}:${this.port} `
        );
    }

    // middleware
    private middleware(): void {
        this.app.use(cors({ origin: "*" }));
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    // routes
    private routes(): void {
        // auth
        this.app.use("/api/v1", authRoutes);
        // photo
        this.app.use("/api/v1/photo", photoRoutes);
        this.app.get("/", (req: Request, res: Response) => {
            res.status(Code.OK).send(
                new HttpResponse(
                    Code.OK,
                    Status.OK,
                    "Welcome to Photo Share app."
                )
            );
        });

        // not found
        this.app.all("*", (req: Request, res: Response) => {
            res.status(Code.NOT_FOUND).send(
                new HttpResponse(
                    Code.NOT_FOUND,
                    Status.NOT_FOUND,
                    this.ROUTE_NOT_FOUND
                )
            );
        });
    }

    // database connection
    private initialiseDatabaseConnection(): void {
        connectDatabase();
    }
}
