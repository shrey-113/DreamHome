import express from "express";
import {
	getBranchDetails,
	getBranches,
	getCities,
	getStaffDetails,
} from "../controllers/cityController";

const cityRouter = express.Router();

cityRouter.get("/cities", getCities);

cityRouter.get("/cities/:city", getBranches);

cityRouter.get("/cities/:city/:branchId", getBranchDetails);

cityRouter.get("/cities/:city/:branchId/:staffid/", getStaffDetails);

export default cityRouter;
