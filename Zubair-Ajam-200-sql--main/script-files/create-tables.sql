DROP DATABASE IF EXISTS shop;

CREATE DATABASE shop;

DROP TABLE IF EXISTS 
"Customers",
"Employees",
"Payments",
"Products",
"Orders";

CREATE TABLE "Customers" (
    "CustomerID" serial PRIMARY KEY,
    "FirstName" varchar(50),
    "LastName" varchar(50),
    "Gender" varchar,
    "Address" varchar(200),
    "Phone" varchar(20),
    "Email" varchar(100),
    "City" varchar(20),
    "Country" varchar(50)
);

CREATE TABLE "Employees" (
    "EmployeeID" serial PRIMARY KEY,
    "FirstName" varchar(50),
    "LastName" varchar(50),
    "Email" varchar(100),
    "JobTitle" varchar(20)
);



CREATE TABLE "Payments" (
    "CustomerID" int REFERENCES "Customers"("CustomerID"),
    "PaymentID" serial PRIMARY KEY,
    "PaymentDate" date,
    "Amount" decimal NOT NULL
);

CREATE TABLE "Products" (
    "ProductID" serial PRIMARY KEY,
    "ProductName" varchar(100),
    "Description" varchar(300),
    "BuyPrice" decimal NOT NULL
);

CREATE TABLE "Orders" (
    "OrderID" serial PRIMARY KEY,
    "ProductID" int REFERENCES "Products"("ProductID"),
    "PaymentID" int REFERENCES "Payments"("PaymentID"),
    "FulfilledByEmployeeID" int REFERENCES "Employees"("EmployeeID"),
    "DateRequired" date,
    "DateShipped" date,
    "Status" varchar(20) NOT NULL
);