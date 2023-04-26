import express from "express";
import { loginUser } from "../controllers/loginController";

const loginRouter = express.Router();

loginRouter.post("", loginUser);

export default loginRouter;
