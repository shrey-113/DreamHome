import express from "express";
import { getProperties } from "../controllers/propertyController";

const propertyRouter = express.Router();

propertyRouter.get("/properties", getProperties);

export default propertyRouter;