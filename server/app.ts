import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { IError } from "./types/basic/IError";
import { DB } from "./db/db";

const app = express();

config();

app.get("/test", (req, res) => {
	console.log("Test route hit");
	res.status(200).json({ message: "Message recieved" });
});

app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
	res.status(error.code).json({ message: error.message });
});

app.listen(3000, async () => {
	await DB.connect();
	console.log("Server listening on port 3000");
});
