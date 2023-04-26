DROP DATABASE IF EXISTS DreamHome;

Create DATABASE DreamHome;
Use DreamHome;

Create Table Owner(
    OwnerID int AUTO_INCREMENT,
    FirstName Varchar(30),
    LastName Varchar(30),
    email varchar(30),
    PhoneNumber Varchar(10),
    Address varchar (100),
    Nationality Varchar(20),
    Date_of_Birth Date,
    Occupation Varchar(20),
    Tax_ID Varchar(10),
    Bank_Account_Number varchar(10),
    PropertyID varchar(10),
    Property_Management_Prefrences varchar(50),
    Contract_Details Varchar(40),
    PRIMARY KEY(OwnerID)
);

Create Table Property (
    PropertyID int AUTO_INCREMENT,
    type varchar(20),
    rooms int(2),
    rent numeric(10,2),
    OwnerID Varchar(10),
    PropertyAddress Varchar(100),
    City Varchar(30),
    BranchNumber Varchar(10),
    StaffID Varchar(10),
    PRIMARY KEY(PropertyID)
);

Create Table Lease (
    LeaseID int AUTO_INCREMENT,
    PropertyID Varchar(10),
    LeaseStartDate Date,
    LeaseEndDate Date,
    LeaseStatus Boolean,
    LeaseRent Numeric(10,2),
    PRIMARY KEY(LeaseID)
);

Create Table BranchOffice (
    BranchNumber int AUTO_INCREMENT,
    BranchAddress Varchar(100),
    City Varchar(30),
    ManagerID Varchar(10),
    TelephoneNumber Varchar(15),
    ManagerStartDate Date,
    ManagerBonus Numeric(10,2),
    PRIMARY KEY(BranchNumber)
);

Create Table Client (
    ClientID int AUTO_INCREMENT,
    ClientName Varchar(30),
    ClientAddress Varchar(100),
    ClientPhone Varchar(10),
    PRIMARY KEY(ClientID)
);

Create Table Staff(
    StaffID int AUTO_INCREMENT,
    Firstname varchar(20),
    LastName varchar(20),
    Sex Char,
    Date_of_Birth Date,
    Position Varchar(15),
    Salary Numeric(12,2),
    BranchNumber Varchar(10),
    SupervisorID Varchar(10),
    Password varchar(50) DEFAULT 'password',
    PRIMARY KEY(StaffID)
);

ALTER TABLE Property
ADD CONSTRAINT owneridFK
FOREIGN KEY(OwnerID) REFERENCES Owner(OwnerID);

ALTER TABLE Property
ADD CONSTRAINT branchnumFK
FOREIGN KEY(BranchNumber) REFERENCES BranchOffice(BranchNumber);

ALTER TABLE Property
ADD CONSTRAINT staffidFK
FOREIGN KEY(StaffID) REFERENCES Staff(StaffID);

ALTER TABLE Property
ADD CONSTRAINT BranchnumpropFK
FOREIGN KEY(BranchNumber) REFERENCES BranchOffice(BranchNumber);

ALTER TABLE Lease
ADD CONSTRAINT propertyidFK
FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID);

ALTER TABLE Staff
ADD CONSTRAINT superidFK
FOREIGN KEY (SupervisorID) REFERENCES Staff(StaffID);

ALTER TABLE Staff
ADD CONSTRAINT branchnumberFK
FOREIGN KEY (BranchNumber) REFERENCES BranchOffice(BranchNumber);

-- INSERT INTO Owner (OwnerID, FirstName, LastName, email, PhoneNumber, Address, Nationality, Date_of_Birth, Occupation, Tax_ID, Bank_Account_Number, PropertyID, Property_Management_Prefrences, Contract_Details) VALUES
-- ( 'John', 'Doe', 'johndoe@email.com', '1234567890', '123 Main St', 'USA', '1980-01-01', 'Accountant', 'TAX001', '12345678', 'P001', 'Rent', '1 year lease'),
-- ( 'Jane', 'Smith', 'janesmith@email.com', '0987654321', '456 Oak St', 'USA', '1975-03-15', 'Lawyer', 'TAX002', '87654321', 'P002', 'Management', '2 year lease'),
-- ( 'David', 'Lee', 'davidlee@email.com', '5555555555', '789 Elm St', 'Canada', '1990-05-20', 'Engineer', 'TAX003', '11111111', 'P003', 'Rent', '6 month lease'),
-- ( 'Emma', 'Johnson', 'emmajohnson@email.com', '2222222222', '987 Maple St', 'UK', '1982-12-31', 'Doctor', 'TAX004', '33333333', 'P004', 'Management', '1 year lease'),
-- ( 'Alex', 'Garcia', 'alexgarcia@email.com', '4444444444', '555 Pine St', 'Mexico', '1978-08-08', 'Business Owner', 'TAX005', '55555555', 'P005', 'Rent', '3 month lease'),
-- ( 'Sophie', 'Brown', 'sophiebrown@email.com', '7777777777', '321 Cedar St', 'Australia', '1995-02-14', 'Artist', 'TAX006', '77777777', 'P006', 'Management', '2 year lease'),
-- ( 'Michael', 'Nguyen', 'michaelnguyen@email.com', '9999999999', '654 Birch St', 'Vietnam', '1988-07-17', 'Programmer', 'TAX007', '99999999', 'P007', 'Rent', '1 year lease');

-- INSERT INTO BranchOffice (BranchNumber, BranchAddress, City, ManagerID, TelephoneNumber, ManagerStartDate, ManagerBonus) VALUES
-- ( '1 Main Street', 'Glasgow', 'S001', '0141 123 4567', '2022-01-01', 5000.00),
-- ( '5 High Street', 'Edinburgh', 'S002', '0131 123 4567', '2022-01-01', 4500.00),
-- ( '10 George Square', 'Glasgow', 'S003', '0141 234 5678', '2022-01-01', 5500.00),
-- ( '15 Princes Street', 'Edinburgh', 'S004', '0131 234 5678', '2022-01-01', 4000.00),
-- ( '20 Buchanan Street', 'Glasgow', 'S005', '0141 345 6789', '2022-01-01', 6000.00),
-- ( '25 Rose Street', 'Edinburgh', 'S006', '0131 345 6789', '2022-01-01', 3500.00),
-- ( '30 Sauchiehall Street', 'Glasgow', 'S007', '0141 456 7890', '2022-01-01', 6500.00);

-- INSERT INTO Staff (StaffID, Firstname, LastName, Sex, Date_of_Birth, Position, Salary, BranchNumber, SupervisorID)
-- VALUES 
-- ( 'John', 'Doe', 'M', '1985-02-12', 'Manager', 75000.00, 'B001', NULL, 'password'),
-- ( 'Jane', 'Doe', 'F', '1990-05-23', 'Supervisor', 50000.00, 'B001', 'S001', 'password'),
-- ( 'Mark', 'Smith', 'M', '1993-11-10', 'Assistant', 35000.00, 'B001', 'S002', 'password'),
-- ('S004', 'Sarah', 'Johnson', 'F', '1987-09-05', 'Supervisor', 50000.00, 'B002', 'S001', 'password'),
-- ('S005', 'Michael', 'Brown', 'M', '1991-07-20', 'Assistant', 35000.00, 'B002', 'S004', 'password'),
-- ('S006', 'Emily', 'Davis', 'F', '1989-03-15', 'Assistant', 35000.00, 'B002', 'S004', 'password'),
-- ('S007', 'David', 'Garcia', 'M', '1995-01-08', 'Supervisor', 50000.00, 'B003', 'S001', 'password'),
-- ('S008', 'Sophia', 'Lee', 'F', '1994-06-18', 'Assistant', 35000.00, 'B003', 'S007', 'password'),
-- ('S009', 'Matthew', 'Wilson', 'M', '1988-12-30', 'Assistant', 35000.00, 'B003', 'S007', 'password');

-- INSERT INTO Property (PropertyID, type, rooms, rent, OwnerID, PropertyAddress, City, BranchNumber, StaffID)
-- VALUES 
-- ('P001', 'Apartment', 2, 1500.00, 'O003', '123 Main St', 'Glasgow', 'B001', 'S005'),
-- ('P002', 'House', 3, 2000.00, 'O004', '456 Park Ave', 'Edinburgh', 'B002', 'S007'),
-- ('P003', 'Apartment', 1, 1000.00, 'O005', '789 5th St', 'Glasgow', 'B001', 'S006'),
-- ('P004', 'Apartment', 2, 1200.00, 'O006', '321 Elm St', 'Edinburgh', 'B002', 'S008'),
-- ('P005', 'House', 4, 2500.00, 'O007', '456 Maple Rd', 'Glasgow', 'B001', 'S005'),
-- ('P006', 'House', 5, 3000.00, 'O001', '789 Oak Ave', 'Edinburgh', 'B002', 'S007'),
-- ('P007', 'Apartment', 1, 800.00, 'O003', '123 Pine St', 'Glasgow', 'B001', 'S006');

-- INSERT INTO Lease (LeaseID, PropertyID, LeaseStartDate, LeaseEndDate, LeaseStatus, LeaseRent)
-- VALUES 
-- ('L001', 'P001', '2022-01-01', '2023-01-01', 1, 1200.00),
-- ('L002', 'P002', '2022-02-01', '2023-02-01', 1, 800.00),
-- ('L003', 'P003', '2022-03-01', '2023-03-01', 0, 1500.00),
-- ('L004', 'P004', '2022-04-01', '2023-04-01', 1, 1000.00),
-- ('L005', 'P005', '2022-05-01', '2023-05-01', 1, 900.00),
-- ('L006', 'P006', '2022-06-01', '2023-06-01', 0, 1300.00),
-- ('L007', 'P007', '2022-07-01', '2023-07-01', 1, 1100.00);

-- INSERT INTO Client (ClientID, ClientName, ClientAddress, ClientPhone)
-- VALUES 
-- ('C001', 'John Smith', '123 Main St, Glasgow', '555-1234'),
-- ('C002', 'Jane Doe', '456 High St, Edinburgh', '555-5678'),
-- ('C003', 'Bob Johnson', '789 Park Ave, London', '555-9012'),
-- ('C004', 'Mary Jones', '246 Elm St, Manchester', '555-3456'),
-- ('C005', 'Tom Wilson', '369 Maple St, Liverpool', '555-7890'),
-- ('C006', 'Samantha Lee', '579 Fifth Ave, New York', '555-2345'),
-- ('C007', 'David Brown', '135 King St, Sydney', '555-6789');

