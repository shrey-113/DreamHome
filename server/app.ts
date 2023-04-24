import express, { NextFunction } from "express";
import { config } from "dotenv";
import { IError } from "./types/basic/IError";

const app = express();

config();

app.get("/test", (req, res) => {
	console.log("Test route hit");
	res.status(200).json({ message: "Message recieved" });
});

app.use(
	(
		error: IError,
		req: express.Request,
		res: express.Response,
		next: NextFunction,
	) => {
		res.status(error.code).json({ message: error.message });
	},
);

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
