const {readFileSync, writeFileSync} = require('fs');

// utf8 is needed to decrypt the text you are trying to 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// flag helps to stop overwriting
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})