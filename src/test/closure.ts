// Outer Returns Inner Function
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const increment = outer();
console.log(increment())



