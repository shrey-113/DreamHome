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
    Property_Management_Prefrences varchar(50),
    Contract_Details Varchar(40),
    PRIMARY KEY(OwnerID)
);

Create Table Property (
    PropertyID int AUTO_INCREMENT,
    type varchar(20),
    rooms int(2),
    rent numeric(10,2),
    OwnerID int,
    PropertyAddress Varchar(100),
    City Varchar(30),
    BranchNumber int,
    StaffID int,
    imagesURL varchar(5000),
    PRIMARY KEY(PropertyID)
);

Create Table Lease (
    LeaseID int AUTO_INCREMENT,
    PropertyID int,
    LeaseStartDate Date,
    LeaseEndDate Date,
    LeaseStatus Boolean,
    LeaseRent Numeric(10,2),
    ClientID int,
    PRIMARY KEY(LeaseID)
);

Create Table BranchOffice (
    BranchNumber int AUTO_INCREMENT,
    BranchAddress Varchar(100),
    City Varchar(30),
    ManagerID int UNIQUE,
    TelephoneNumber Varchar(15),
    ManagerStartDate Date,
    ManagerBonus Numeric(10,2),
    PRIMARY KEY(BranchNumber)
);

Create Table Client (
    ClientID int AUTO_INCREMENT,
    ClientName Varchar(50),
    ClientAddress Varchar(100),
    ClientEmail varchar(50),
    ClientPhone Varchar(10),
    PRIMARY KEY(ClientID)
);

Create Table Staff(
    StaffID int AUTO_INCREMENT,
    Firstname varchar(20),
    LastName varchar(20),
    Email varchar(50) UNIQUE,
    Sex Char,
    Date_of_Birth Date,
    Position Varchar(15),
    Salary Numeric(12,2),
    BranchNumber int,
    SupervisorID int,
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

INSERT INTO Owner ( FirstName, LastName, email, PhoneNumber, Address, Nationality, Date_of_Birth, Occupation, Tax_ID, Bank_Account_Number,  Property_Management_Prefrences, Contract_Details) VALUES
( 'John', 'Doe', 'johndoe@email.com', '1234567890', '123 Main St', 'USA', '1980-01-01', 'Accountant', 'TAX001', '12345678', 'Rent', '1 year lease'),
( 'Jane', 'Smith', 'janesmith@email.com', '0987654321', '456 Oak St', 'USA', '1975-03-15', 'Lawyer', 'TAX002', '87654321',  'Management', '2 year lease'),
( 'David', 'Lee', 'davidlee@email.com', '5555555555', '789 Elm St', 'Canada', '1990-05-20', 'Engineer', 'TAX003', '11111111',  'Rent', '6 month lease'),
( 'Emma', 'Johnson', 'emmajohnson@email.com', '2222222222', '987 Maple St', 'UK', '1982-12-31', 'Doctor', 'TAX004', '33333333',  'Management', '1 year lease'),
( 'Alex', 'Garcia', 'alexgarcia@email.com', '4444444444', '555 Pine St', 'Mexico', '1978-08-08', 'Business Owner', 'TAX005', '55555555',  'Rent', '3 month lease'),
( 'Sophie', 'Brown', 'sophiebrown@email.com', '7777777777', '321 Cedar St', 'Australia', '1995-02-14', 'Artist', 'TAX006', '77777777',  'Management', '2 year lease'),
( 'Michael', 'Nguyen', 'michaelnguyen@email.com', '9999999999', '654 Birch St', 'Vietnam', '1988-07-17', 'Programmer', 'TAX007', '99999999',  'Rent', '1 year lease');

INSERT INTO BranchOffice ( BranchAddress, City, ManagerID, TelephoneNumber, ManagerStartDate, ManagerBonus) VALUES
( '1 Main Street', 'Glasgow', 1, '0141 123 4567', '2022-01-01', 5000.00),
( '5 High Street', 'Glasgow', 5, '0131 123 4567', '2022-01-01', 4500.00),
( '10 George Square', 'Glasgow', 3, '0141 234 5678', '2022-01-01', 5500.00),
( '15 Princes Street', 'Edinburgh', 4, '0131 234 5678', '2022-01-01', 4000.00),
( '20 Buchanan Street', 'Glasgow',5 , '0141 345 6789', '2022-01-01', 6000.00),
( '25 Rose Street', 'Edinburgh',6 , '0131 345 6789', '2022-01-01', 3500.00),
( '30 Sauchiehall Street', 'Glasgow',7 , '0141 456 7890', '2022-01-01', 6500.00);

INSERT INTO Staff (Firstname, LastName, Email, Sex, Date_of_Birth, Position, Salary, BranchNumber, SupervisorID)
VALUES 
    ('John', 'Doe', 'johndoe@example.com', 'M', '1990-01-01', 'Manager', 50000, 1, NULL),
    ('Jane', 'Doe', 'janedoe@example.com', 'F', '1995-01-01', 'Assistant', 40000, 1, NULL),
    ('Mike', 'Smith', 'mikesmith@example.com', 'M', '1985-01-01', 'Supervisor', 60000, 2, NULL),
    ('Sarah', 'Johnson', 'sarahjohnson@example.com', 'F', '1992-01-01', 'Assistant', 45000, 2, NULL),
    ('David', 'Lee', 'davidlee@example.com', 'M', '1988-01-01', 'Manager', 55000, 2, NULL),
    ('Emily', 'Wang', 'emilywang@example.com', 'F', '1998-01-01', 'Assistant', 38000, 2, NULL);

INSERT INTO Property ( type, rooms, rent, OwnerID, PropertyAddress, City, BranchNumber, StaffID)
VALUES 
( 'Apartment', 2, 1500.00, 1, '123 Main St', 'Glasgow', 2, 1),
( 'House', 3, 2000.00, 2, '456 Park Ave', 'Edinburgh', 2, 2),
( 'Apartment', 1, 1000.00, 3, '789 5th St', 'Glasgow', 1, 2),
( 'Apartment', 2, 1200.00, 2, '321 Elm St', 'Edinburgh', 2, 1),
( 'House', 4, 2500.00, 2, '456 Maple Rd', 'Glasgow', 1, 3),
( 'House', 5, 3000.00,3 , '789 Oak Ave', 'Edinburgh', 2, 3),
( 'Apartment', 1, 800.00, 2, '123 Pine St', 'Glasgow', 1, 4);

INSERT INTO Lease (PropertyID, LeaseStartDate, LeaseEndDate, LeaseStatus, LeaseRent)
VALUES 
(8, '2022-01-01', '2023-01-01', 1, 1200.00),
(9, '2022-02-01', '2023-02-01', 1, 800.00),
(10, '2022-03-01', '2023-03-01', 0, 1500.00),
(11, '2022-04-01', '2023-04-01', 1, 1000.00),
(12, '2022-05-01', '2023-05-01', 1, 900.00),
(13, '2022-06-01', '2023-06-01', 0, 1300.00),
(14, '2022-07-01', '2023-07-01', 1, 1100.00);

INSERT INTO Client ( ClientName, ClientAddress, ClientPhone)
VALUES 
( 'John Smith', '123 Main St, Glasgow', '555-1234'),
( 'Jane Doe', '456 High St, Edinburgh', '555-5678'),
( 'Bob Johnson', '789 Park Ave, London', '555-9012'),
( 'Mary Jones', '246 Elm St, Manchester', '555-3456'),
( 'Tom Wilson', '369 Maple St, Liverpool', '555-7890'),
( 'Samantha Lee', '579 Fifth Ave, New York', '555-2345'),
( 'David Brown', '135 King St, Sydney', '555-6789');


