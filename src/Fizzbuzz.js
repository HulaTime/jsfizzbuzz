function Fizzbuzz() {
}

Fizzbuzz.prototype.play = function(number) {
  if (number % 15 === 0) {return 'fizzbuzz'; }
  if (number % 3 === 0) {return 'fizz'; }
  if (number % 5 === 0) {return 'buzz'; }
}

// Fizzbuzz.prototype.dividesByThree = function(num) {
//   return "fizz" if num % 3 === 0
// }