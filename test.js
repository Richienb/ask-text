const test = require("ava")
const askText = require(".")

test("main", (t) => {
	t.is(typeof askText, "function")
})
