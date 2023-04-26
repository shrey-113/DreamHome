import { RequestHandler } from "express";
import { DB } from "../db/db";

export const fetchOwners: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from Owner");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};

export const fetchProperties: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from Property");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};

export const fetchLease: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from Lease");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};

export const fetchBranch: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from BranchOffice");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};

export const fetchClient: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from Client");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};

export const fetchStaff: RequestHandler = async (req, res, next) => {
	try {
		const result = await DB.query("Select * from Staff");
		res.status(200).json({ result });
	} catch (err) {
		console.log(err);
		return;
	}
};