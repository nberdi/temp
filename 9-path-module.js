const path = require('path');
// console.log(path.sep);      // outcome: '/'

const filePath = path.join('/content', 'subfolder', 'text.txt')
// console.log(filePath)       // outcome: '/content/subfolder/text.txt'

const base = path.basename(filePath)
// console.log(base)           // outcome: 'text.txt'


// const absolute = path.resolve(__dirname)
// console.log(absolute)       // outcome: '/Users/nauryzbek/node.js'


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
// console.log(absolute)       // outcome: '/Users/nauryzbek/node.js/content/subfolder/text.txt'