import express from "express";
import {
	fetchAll,
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

fetchRouter.get("/all", fetchAll);

export default fetchRouter;
