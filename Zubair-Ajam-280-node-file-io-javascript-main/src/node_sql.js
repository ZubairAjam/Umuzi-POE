const { pool } = require("./config");
const { statements, error } = require("./node_sql_assist");

async function createTable() {
	await pool.query(statements.createTable);
	return "Table created";
}

async function addNewVisitor(
	visitorName,
	visitorAge,
	visitDate,
	visitTime,
	assistantName,
	comments
) {
	await pool.query(statements.insert, [
		visitorName,
		visitorAge,
		visitDate,
		visitTime,
		assistantName,
		comments,
	]);
	return "New visitor added";
}

async function listAllVisitors() {
	const allVisitors = await pool.query(statements.selectAllVisitors);
	return allVisitors.rows;
}

async function deleteVisitor(visitorId) {
	const deletedVis = await pool.query(statements.deleteVisitor, [visitorId]);
	if (deletedVis.rowCount === 0) {
		throw Error(error.notExist);
	}
	return "Visitor Deleted!";
}

async function updateVisitor(visitorId, columnToUpdate, newInfo) {
	const update = await pool.query(
		statements.updateVisitorInfo(columnToUpdate),
		[newInfo, visitorId]
	);
	if (update.rowCount === 0) {
		throw Error(error.notExist);
	}
	return "Visitor updated";
}

async function viewVisitor(visitorid) {
	const visitor = await pool.query(statements.viewVisitor, [visitorid]);
	if (visitor.rowCount === 0) {
		throw Error(error.notExist);
	}
	return visitor.rows[0];
}

async function deleteAllVisitors() {
	await pool.query(statements.deleteAllVisitors);
	return "All visitors deleted";
}

async function viewLastVisitor() {
	const lastVisitor = await pool.query(statements.viewLastVisitor);
	return lastVisitor.rows[0];
}

module.exports = {
	pool,
	createTable,
	addNewVisitor,
	listAllVisitors,
	deleteVisitor,
	updateVisitor,
	viewVisitor,
	deleteAllVisitors,
	viewLastVisitor,
};
