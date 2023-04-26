import { NextFunction, Request, Response } from "express";
import { IError } from "../types/basic/IError";
import jwt from "jsonwebtoken";

export async function isAuth(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	if (!token) {
		return next(new IError("Unauthorized", 401));
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
			id: string;
			role: string;
			scopes: Array<string>;
		};
		//@ts-ignore
		req.user = decoded;
		next();
	} catch (error) {
		return next(new IError("Unauthorized", 401));
	}
}

export async function checkScopes(
	req: Request,
	res: Response,
	next: NextFunction,
	scopes: Array<string>,
) {
	//@ts-ignore
	const scope = req.user?.scopes;
	if (!scopes) {
		return next(new IError("Unauthorized", 401));
	}
	if (!scope.includes(scopes)) {
		return next(new IError("Unauthorized", 401));
	}
	next();
}
