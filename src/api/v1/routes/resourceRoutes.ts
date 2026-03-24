import express, { Router } from "express";
import * as resourceController from "../controllers/resourceController"
import { validateRequest } from "../middleware/validate";

const resourceRouter: Router = express.Router();


resourceRouter.post("/resources", resourceController.createPostHandler);


export default resourceRouter;