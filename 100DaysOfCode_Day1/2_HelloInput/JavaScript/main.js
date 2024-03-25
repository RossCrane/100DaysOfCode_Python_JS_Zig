// Browser Solution
// const firstName = prompt('What is your name?');
// console.log('Hello, ' + firstName);

// Node.js Solution
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('What is your name? ', (name) => {
	console.log(`Hello, ${name}`);
	readline.close();
});
