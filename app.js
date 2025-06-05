// You always have to install external packages before using them

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
