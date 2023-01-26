const statements = {
	createTable: `CREATE TABLE IF NOT EXISTS Visitors(
        visitorId SERIAL PRIMARY KEY,
        visitorName varchar(50) NOT NULL,
        visitorAge int,
        visitDate date,
        visitTime time,
        assistantName varchar(50),
        comments varchar(200)
        )`,
	insert: `INSERT INTO Visitors(
        visitorName,
        visitorAge,
        visitDate,
        visitTime,
        assistantName,
        comments
    ) VALUES ($1, $2, $3, $4, $5, $6)`,
	selectAllVisitors: `SELECT visitorId, visitorName from Visitors`,
	deleteVisitor: `DELETE from Visitors WHERE visitorId = $1`,
	viewVisitor: `SELECT * from Visitors WHERE visitorId = $1`,
	deleteAllVisitors: `DELETE from Visitors`,
	viewLastVisitor: `SELECT * FROM Visitors WHERE visitorId=(SELECT max(visitorId) FROM Visitors)`,
	updateVisitorInfo: function (columnToUpdate) {
		return `UPDATE Visitors SET ${columnToUpdate} = $1 WHERE visitorId = $2`;
	},
};
const error = {
	notExist: "User does not exist",
};

module.exports = { statements, error };
