import { RequestHandler } from "express";
import { DB } from "../db/db";
import { generateToken } from "../middlewares/Auth";
import { IError } from "../types/basic/IError";

export const loginUser: RequestHandler = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (email === "admin" && password === "admin") {
			res.status(200).json({ message: "Login successful" });
		} else {
			const user = await DB.query(
				`Select Email, Password, Position, BranchNumber
				 from Staff where Email = '${email}'`,
			);
			if (user.length === 0) {
				return res.status(404).json({ message: "No user found" });
			}
			const password = user[0].Password;
			if (password === password) {
				return res.status(200).json({
					token: await generateToken(user[0].Email, user[0].Position),
					role: user[0].Position,
					branch: user[0].BranchNumber,
				});
			}
			res.status(401).json({ message: "Login failed" });
		}
	} catch (err) {
		next(new IError("Login failed", 401, "Login failed"));
	}
};
