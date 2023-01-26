const {
	addNewVisitor,
	listAllVisitors,
	deleteVisitor,
	updateVisitor,
	viewVisitor,
	deleteAllVisitors,
	viewLastVisitor,
} = require("../src/node_sql");
const { pool } = require("../src/config");
const { statements } = require("../src/node_sql_assist");
beforeEach(function () {
	const result = {
		command: "COMMAND",
		rowCount: 1,
		oid: null,
		rows: [],
	};
	spyOn(pool, "query").and.returnValue(Promise.resolve(result));
});
describe("addNewVisitor function", function () {
	it("should be called with the correct arguments and should call the spy once", function () {
		addNewVisitor(
			"Zubair",
			"27",
			"10-10-2021",
			"17:03",
			"Bobby",
			"Great stuff"
		);

		expect(pool.query).toHaveBeenCalledWith(statements.insert, [
			"Zubair",
			"27",
			"10-10-2021",
			"17:03",
			"Bobby",
			"Great stuff",
		]);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("listAllVisitors function", function () {
	it("should list visitors id and name from the data, and should call the spy once", function () {
		listAllVisitors();
		expect(pool.query).toHaveBeenCalledWith(statements.selectAllVisitors);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("deleteVisitor function", function () {
	it("should be called with the correct arguments and should call the spy once", function () {
		deleteVisitor(8);
		expect(pool.query).toHaveBeenCalledWith(statements.deleteVisitor, [8]);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("updateVisitor function", function () {
	it("should be called with the correct arguments and should call the spy once", function () {
		updateVisitor(7, "visitorName", "Bobby");
		expect(pool.query).toHaveBeenCalledWith(
			statements.updateVisitorInfo("visitorName"),
			["Bobby", 7]
		);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("viewVisitor function", function () {
	it("should be called with the correct arguments and should call the spy once", function () {
		viewVisitor(8);
		expect(pool.query).toHaveBeenCalledWith(statements.viewVisitor, [8]);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("deleteAllVisitors function", function () {
	it("delete all visitors from the database and should call the spy once", function () {
		deleteAllVisitors();
		expect(pool.query).toHaveBeenCalledWith(statements.deleteAllVisitors);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});

describe("viewLastVisitor function", function () {
	it("should list the last visitor from the database and should call the spy once", function () {
		viewLastVisitor();
		expect(pool.query).toHaveBeenCalledWith(statements.viewLastVisitor);
		expect(pool.query).toHaveBeenCalledTimes(1);
	});
});
