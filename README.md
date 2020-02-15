# Ask text [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/ask-text/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/ask-text)

Ask the user for a text input.

[![NPM Badge](https://nodei.co/npm/ask-text.png)](https://npmjs.com/package/ask-text)

## Install

```sh
npm install ask-text
```

## Usage

```js
const askText = require("ask-text");

(async () => {
	const input = await askText("What do you like? ")
	console.log(`I like ${input} too!`)
})()
```

## API

### askText(prompt)

#### prompt

Type: `string`

The text to prompt the user with.
