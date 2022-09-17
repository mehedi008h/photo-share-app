import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import ip from "ip";

import { connectDatabase } from "../src/config/database";

dotenv.config();

export class App {
    private readonly app: Application;
    private readonly APPLICATION_RUNNING = "Application is running on:";

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
    }

    // routes
    private routes(): void {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).send({ message: "Welcome to Photo Share app." });
        });
    }

    private initialiseDatabaseConnection(): void {
        connectDatabase();
    }
}
