import { RequestHandler } from "express";
import { DB } from "../db/db";

export const loginUser: RequestHandler = async (req, res, next) => {
	const { email, password } = req.body;
	if (email === "admin" && password === "admin") {
		res.status(200).json({ message: "Login successful" });
	} else {
		const user = await DB.query(`Select Password from Staff where Email = '${email}'`);
		const password = user[0].password;
		if (password === password) {
			res.status(200).json({ message: "Login successful" });
		}
		res.status(401).json({ message: "Login failed" });
	}
};
