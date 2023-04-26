import express from "express";

const cityRouter = express.Router();

cityRouter.get("/cities");

cityRouter.get("/cities/:city");

cityRouter.get("/cities/:city/:branchId");

cityRouter.get("/cities/:city/:branchId/:staffid/");

export default cityRouter;
