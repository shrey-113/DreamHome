import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { IError } from "./types/basic/IError";
import { DB } from "./db/db";
// import { isAuth } from "./middlewares/Auth";
import loginRouter from "./routes/loginRoutes";
import createRouter from "./routes/createRoutes";
import cors from "cors";
import fetchRouter from "./routes/fetchRoutes";
import cityRouter from "./routes/cityRoutes";
import propertyRouter from "./routes/propertyRoutes";

const app = express();

app.use(cors());

app.use(express.json());

config();

app.get("/test", async (req, res) => {
	console.log("Test route hit");
	res.status(200).json({ message: "Message recieved" });
});

app.use("/login", loginRouter);

app.use("/create", createRouter);

app.use("/fetch", fetchRouter);

app.use("/search", cityRouter);

app.use("/property", propertyRouter)
// app.use(isAuth);

app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
	console.error(error.message);
	res.status(error.code).json({ message: error.message });
});

app.listen(3000, async () => {
	await DB.connect();
	console.log("Server listening on port 3000");
});

