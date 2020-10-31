/* LIST AND COUNT ALL WORDS IN A TEXT FILE */
const fs = require("fs");
const path = process.cwd();
const buffer = fs.readFileSync("text.txt");

// Split on new lines and create a list
// The split function creates an array of strings
const textList = buffer.toString().split("\r\n");

const splitDots = x => x.split(".");
const splitSpaces = x => x.split(" ");

// Here a monadic structure is very handy!
const wordsWithoutSeparators = textList
    .flatMap(splitDots)
    .flatMap(splitSpaces);

// Remove empty strings from list
const onlyWords = wordsWithoutSeparators
	.filter(x => x !== "");

// Final list, we can pick length + log words
console.log(onlyWords.length, onlyWords);
