import express from "express";
import {
	createClient,
	createOwner,
	createStaff,
} from "../controllers/createUser";
import {
	createBranch,
	createLease,
	createProperty,
} from "../controllers/createProperty";

const createRouter = express.Router();
// Users
createRouter.post("/staff", createStaff);

createRouter.post("/client", createClient);

createRouter.post("/owner", createOwner);

// Properties
createRouter.post("/property", createProperty);

createRouter.post("/branch", createBranch);

createRouter.post("/lease", createLease);

export default createRouter;
