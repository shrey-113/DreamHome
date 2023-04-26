import express from "express";
import {
	fetchBranch,
	fetchClient,
	fetchLease,
	fetchOwners,
	fetchProperties,
	fetchStaff,
} from "../controllers/fetch";

const fetchRouter = express.Router();

fetchRouter.get("/owners", fetchOwners);

fetchRouter.get("/properties", fetchProperties);

fetchRouter.get("/lease", fetchLease);

fetchRouter.get("/branch", fetchBranch);

fetchRouter.get("/client", fetchClient);

fetchRouter.get("/staff", fetchStaff);

export default fetchRouter;
