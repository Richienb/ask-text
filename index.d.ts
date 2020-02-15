/**
 * Ask the user for a text input.
 * @param prompt The text to prompt the user with.
 * @example
 * ```
 * const askText = require("ask-text");
 *
 * (async () => {
 * 	const input = await askText("What do you like? ")
 * 	console.log(`I like ${input} too!`)
 * })()
 * ```
*/
declare function askText(prompt: string): Promise<string>

export = askText
