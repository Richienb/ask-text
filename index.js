"use strict"

const readline = require("readline")

module.exports = (prompt) => new Promise((resolve) => {
	const rl = readline.createInterface(process.stdin, process.stdout)
	rl.question(prompt, (answer) => {
		resolve(answer)
		rl.close()
	})
})
