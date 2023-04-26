import { RequestHandler } from "express";
import { IError } from "../types/basic/IError";
import { DB } from "../db/db";

export const getProperties: RequestHandler = async (req, res, next) => {
	try {
		const properties = await DB.query(`Select * from Property`);
		res.status(200).json({ properties });
	} catch (error) {
		next(new IError("City fetch failed", 500, "getCities"));
	}
};

