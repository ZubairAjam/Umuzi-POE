INSERT INTO "Customers" ("FirstName", "LastName", "Gender", "Address", "Phone", "Email", "City", "Country") VALUES
('John', 'Hibert', 'Male', '284 chaucer st', '084789657', 'john@gmail.com', 'Johannesburg', 'South Africa'),
('Thando', 'Sithole', 'Female', '240 Sect 1', '0794445584', 'thando@gmail.com', 'Cape Town', 'South Africa'),
('Leon', 'Glen', 'Male', '81 Everton Rd,Gillits', '0820832830', 'Leon@gmail.com', 'Durban', 'South Africa'),
('Charl', 'Muller', 'Male', '290A Dorset Ecke', '+44856872553',	'Charl.muller@yahoo.com', 'Berlin',	'Germany'),
('Julia', 'Stein', 'Female', '2 Wernerring', '+448672445058', 'Js234@yahoo.com', 'Frankfurt', 'Germany');

INSERT INTO "Employees" ("FirstName", "LastName", "Email", "JobTitle") VALUES
('Kani','Mat thew', 'mat@gmail.com', 'Manager'),
('Lesly', 'Cronje', 'LesC@gmail.com', 'Clerk'),
('Gideon', 'Maduku', 'm@gmail.com', 'Accountant');



INSERT INTO "Payments" ("CustomerID", "PaymentDate", "Amount") VALUES
(1, '2018-09-01', '150.75'),
(5, '2018-09-03', '150.75'),
(4, '2018-09-03', '700.60');

INSERT INTO "Products" ("ProductName", "Description", "BuyPrice") VALUES
('Harley Davidson Chopper', 'This replica features working kickstand, front suspension, gear-shift lever', '150.75'),
('Classic Car', 'Turnable front wheels, steering function', '550.75'),
('Sports Car', 'Turnable front wheels, steering function', '700.60');

INSERT INTO "Orders" ("ProductID", "PaymentID", "FulfilledByEmployeeID", "DateRequired", "DateShipped", "Status") VALUES
(1, 1, 2, '2018-09-05', NULL , 'Not shipped'),
(1, 2, 2, '2018-09-04', '2018-09-03', 'Shipped'),
(3, 3, 3, '2018-09-06', NULL, 'Not shipped');