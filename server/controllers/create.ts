import { RequestHandler } from "express";
import { DB } from "../db/db";
export const createStaff: RequestHandler = async (req, res, next) => {
	try {
		const {
			firstname,
			lastname,
			sex,
			date_of_birth,
			position,
			salary,
			branchnumber,
			supervisorid,
		} = req.body;

		await DB.query(
			`Insert into Staff (Firstname, LastName, Sex, Date_of_Birth, Position, Salary, BranchNumber, SupervisorID) Values ('${firstname}', '${lastname}', '${sex}', '${date_of_birth}', '${position}', '${salary}', '${branchnumber}', '${supervisorid}')`,
		);
		res.status(200).json({ message: "Staff created" });
	} catch (err) {
		console.log(err);
		return;
		next();
	}
};

export const createClient: RequestHandler = async (req, res, next) => {
	try {
		const { clientid, clientname, clientaddress, clientphone } = req.body;

		await DB.query(
			`Insert into Client (ClientID, ClientName, ClientAddress, ClientPhone) Values ('${clientid}', '${clientname}', '${clientaddress}', '${clientphone}')`,
		);
		res.status(200).json({ message: "Client created" });
	} catch (err) {
		console.log(err);
		return;
		next();
	}
};

export const createOwner: RequestHandler = async (req, res, next) => {
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
		propertyid,
		property_manager_preferences,
		contract_details,
	} = req.body;
	await DB.query(
		`INSERT INTO Owner (OwnerID, FirstName, LastName, email, PhoneNumber, Address, Nationality, Date_of_Birth, Occupation, Tax_ID, Bank_Account_Number, PropertyID, Property_Management_Prefrences, Contract_Details) VALUES ('${firstname}','${lastname}','${email}','${phonenumber}','${address}','${nationality}','${date_of_birth}','${occupation}','${tax_id}','${bank_account_number}','${propertyid}','${property_manager_preferences}','${contract_details}')`,
	);
};
