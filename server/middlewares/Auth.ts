import { NextFunction, Request, Response } from "express";
import { IError } from "../types/basic/IError";
import jwt from "jsonwebtoken";

const roles = {
	admin: ["*"],
	manager: ["add-supervisor", "*supervisor"],
	supervisor: ["add-assistant", "*assistant"],
	assistant: ["add-client", "add-property"],
};

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
			email: string;
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

export async function generateToken(email: string, role: string) {
	const token = jwt.sign(
		{
			email: email,
			role: role,
			//@ts-ignore
			scopes: getScopes(roles[role]),
		},
		process.env.JWT_SECRET!,
		{ expiresIn: "7d" },
	);
	return token;
}

export function getScopes(role: string) {
	//@ts-ignore
	let scopes: Array<string> = roles[role] || [];
	let finalScopes: Array<unknown> = [];
	scopes.forEach((scope) => {
		if (scope[0] === "*" && scope.length > 1) {
			getScopes(scope.slice(1, scope.length)).forEach((scope) => {
				finalScopes.push(scope);
			});
		} else {
			finalScopes.push(scope);
		}
	});

	return finalScopes;
}
/**
 *
 * @param scope Scope to validate it has access to
 * @param role Role of the user
 * @returns
 * @example
 * validateScope("add-client", req.user.role) // true
 */
export function validateScope(scope: string, role: string) {
	let scopes = getScopes(role);

	let flag = 0;

	scopes.forEach((s) => {
		if (s === scope || s === "*") {
			flag = 1;
			return;
		}
	});

	if (flag === 1) return true;
	return false;
}
