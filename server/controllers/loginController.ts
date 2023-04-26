import { RequestHandler } from "express";

export const loginUser: RequestHandler = async (req, res, next) => {
	const { username, password } = req.body;
	if (username === "admin" && password === "admin") {
		res.status(200).json({ message: "Login successful" });
	} else {
		res.status(401).json({ message: "Login failed" });
	}
};
