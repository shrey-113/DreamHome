import { RequestHandler } from "express";
import { DB } from "../db/db";
import { IError } from "../types/basic/IError";
export const createStaff: RequestHandler = async (req, res, next) => {
	try {
		const {
			firstname,
			lastname,
			email,
			sex,
			date_of_birth,
			position,
			salary,
			branchnumber,
			supervisorid,
		} = req.body;

		await DB.query(
			`Insert into Staff (Firstname, LastName, Email, Sex, Date_of_Birth, Position, Salary, BranchNumber, SupervisorID) Values ('${firstname}', '${lastname}', '${email}', '${sex}', '${date_of_birth}', '${position}', '${salary}', ${branchnumber}, ${supervisorid})`,
		);
		res.status(200).json({ message: "Staff created" });
	} catch (err) {
		next(new IError("Staff creation failed", 401, "Create staff"));
	}
};

export const createClient: RequestHandler = async (req, res, next) => {
	try {
		const { clientname, clientaddress, clientemail, clientphone } =
			req.body;

		await DB.query(
			`Insert into Client ( ClientName, ClientAddress, ClientEmail, ClientPhone) Values ('${clientname}', '${clientaddress}', '${clientemail}', '${clientphone}')`,
		);
		res.status(200).json({ message: "Client created" });
	} catch (err) {
		console.log(err);
		return;
		next();
	}
};

export const createOwner: RequestHandler = async (req, res, next) => {
	try {
		const {
			firstname,
			lastname,
			email,
			phonenumber,
			address,
			nationality,
			date_of_birth,
			occupation,
			tax_id,
			bank_account_number,
			property_manager_preferences,
			contract_details,
		} = req.body;
		await DB.query(
			`INSERT INTO Owner ( FirstName, LastName, email, PhoneNumber, Address, Nationality, Date_of_Birth, Occupation, Tax_ID, Bank_Account_Number, Property_Management_Prefrences, Contract_Details) VALUES ('${firstname}','${lastname}','${email}','${phonenumber}','${address}','${nationality}','${date_of_birth}','${occupation}','${tax_id}','${bank_account_number}','${property_manager_preferences}','${contract_details}')`,
		);
		res.status(200).json({ message: "Owner created" });
	} catch (err) {
		next(new IError("Error creating owner", 500, "createOwner"));
	}
};
