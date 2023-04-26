import { RequestHandler } from "express";
import { DB } from "../db/db";
import { IError } from "../types/basic/IError";

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

export const fetchAll: RequestHandler = async (req, res, next) => {
	try {
		const text = req.body.text;
		const [owners, properties, lease, branch, client, staff] =
			await Promise.all([
				DB.query(
					`SELECT * FROM Owner WHERE CONCAT_WS('', OwnerID, FirstName, LastName, email, PhoneNumber, Address, Nationality, Date_of_Birth, Occupation, Tax_ID, Bank_Account_Number, Property_Management_Prefrences, Contract_Details) REGEXP '${text}'`,
				),
				DB.query(
					`SELECT * FROM Property WHERE CONCAT_WS('', PropertyID, type, rooms, rent, OwnerID, PropertyAddress, City, BranchNumber, StaffID, imagesURL) REGEXP '${text}'`,
				),
				DB.query(
					`SELECT * FROM Lease WHERE CONCAT_WS('', LeaseID, PropertyID, LeaseStartDate, LeaseEndDate, LeaseStatus, LeaseRent, ClientID) REGEXP '${text}'`,
				),
				DB.query(
					`SELECT * FROM BranchOffice WHERE CONCAT_WS('', BranchNumber, BranchAddress, City, ManagerID, TelephoneNumber, ManagerStartDate, ManagerBonus) REGEXP '${text}'`,
				),
				DB.query(
					`SELECT * FROM Client WHERE CONCAT_WS('', ClientID, ClientName, ClientAddress, ClientEmail, ClientPhone) REGEXP '${text}'`,
				),
				DB.query(
					`SELECT * FROM Staff WHERE CONCAT_WS('', StaffID, Firstname, LastName, Email, Sex, Date_of_Birth, Position, Salary, BranchNumber, SupervisorID, Password) REGEXP '${text}'`,
				),
			]);
		res.status(200).json({
			owners,
			properties,
			lease,
			branch,
			client,
			staff,
		});
	} catch (error) {
		next(new IError("Fetch failed", 401, "Fetch failed"));
	}
};
