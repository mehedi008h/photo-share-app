import { Router } from "express";
import { addNewPhoto } from "../controllers/photo.controller";
import { isAuthenticatedUser } from "../middleware/auth";

const photoRoutes = Router();

photoRoutes.route("/").post(isAuthenticatedUser, addNewPhoto);

export default photoRoutes;
