let value = 0

console.log(module.filename) // prints absolute path to counter.js
//console.log(__filename) // prints same as above

module.exports = {
  increment: () => value++,
  get: () => value,
}