import { RequestHandler } from "express";
import { IError } from "../types/basic/IError";
import { DB } from "../db/db";

export const getCities: RequestHandler = async (req, res, next) => {
	try {
		const cities = await DB.query(`Select DISTINCT City from BranchOffice`);
		res.status(200).json({ cities });
	} catch (error) {
		next(new IError("City fetch failed", 500, "getCities"));
	}
};

export const getBranches: RequestHandler = async (req, res, next) => {
	try {
		const city = req.params.city;
		const branches = await DB.query(
			`SELECT b.*, CONCAT(s.Firstname, ' ', s.LastName) as Manager from BranchOffice b, Staff s  where City = '${city}' and s.StaffID = b.ManagerID`,
		);
		// No of staff for each role in the city
		const staff = await DB.query(
			`SELECT Position, COUNT(*) as NoOfStaff from Staff s, BranchOffice b where s.BranchNumber = b.BranchNumber and b.City = '${city}' GROUP BY Position`,
		);
		const branchesNumber = await DB.query(
			`SELECT COUNT(*) from BranchOffice where City = '${city}'`,
		);
		res.status(200).json({ branches, branchesNumber, staff });
	} catch (error) {}
};

export const getBranchDetails: RequestHandler = async (req, res, next) => {
	try {
		// const city = req.params.city;
		const branch = req.params.branchId;
		const branchDetails = await DB.query(
			`SELECT * from BranchOffice where BranchNumber = ${branch}`,
		);
		const ManagerDetails = await DB.query(
			`Select * from Staff where BranchNumber = ${branch} and Position = 'Manager'`,
		);
		const SupervisorDetails = await DB.query(
			`Select * from Staff where BranchNumber = ${branch} and Position = 'Supervisor'`,
		);
		const AssistantDetails = await DB.query(
			`Select * from Staff where BranchNumber = ${branch} and Position = 'Assistant'`,
		);
		const staffNumber = await DB.query(
			`Select COUNT(*) from Staff where BranchNumber = ${branch} GROUP BY Position`,
		);
		const totalSalary = await DB.query(
			`Select SUM(Salary) from Staff where BranchNumber = ${branch}`,
		);
		res.status(200).json({
			branchDetails,
			ManagerDetails,
			SupervisorDetails,
			AssistantDetails,
			staffNumber,
			totalSalary,
		});
    } catch (error) {
        next(new IError("Branch fetch failed", 500, "getBranches"));
    }
};

export const getStaffDetails: RequestHandler = async (req, res, next) => {
    try {
        const staffid = req.params.staffid;
        const staffDetails = await DB.query(
            `Select * from Staff where StaffID = ${staffid}`,
        );
		const superior = await DB.query(
			`SELECT CONCAT(FirstName, ' ', LastName) as SupervisorName from Staff where StaffID IN (Select SupervisorID from Staff where StaffID = ${staffid})`
		);
		const inferior = await DB.query(
			`SELECT CONCAT(FirstName, ' ', LastName) as inferiorNames, Email, Sex, Position, Salary from Staff where SupervisorID = ${staffid}`
		);
		const propertiesManaged = await DB.query(
			`SELECT PropertyID, type, OwnerID, rent, PropertyAddress, City from Property where StaffID = ${staffid}`
		)
        res.status(200).json({ staffDetails, superior, inferior, propertiesManaged });
    } catch (error) {
        next(new IError("Staff fetch failed", 500, "getStaff"));
    }
};
