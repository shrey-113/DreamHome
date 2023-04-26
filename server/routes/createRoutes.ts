import express from "express";
import { createStaff } from "../controllers/create";

const createRouter = express.Router();
// Users
createRouter.post("/staff",createStaff);

createRouter.post("/client");

createRouter.post("/owner");

// Properties
createRouter.post("/property");

createRouter.post("/branch");


createRouter.post("/lease");



export default createRouter;
