// Outer Returns Inner Function
export function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const increment = outer();
console.log(increment())





// let's implement a FlyOver tool system how many car passed through a bridge
// we have a function that returns a function that returns a function
// the first function is the bridge
// the second function is the car

export function bridge(bridgeName:string) {
    let count=0;

    // second inner function ,we will return it
    return function(carName:string) {
        count++;
        return `${carName} passed over ${bridgeName} ,So far total passed${count} vehicles`;
    }
}

const bridge1=bridge("Bridge1");
console.log(bridge1("Car1"))
console.log(bridge1("Car2"))
console.log(bridge1("Car3"))
console.log(bridge1("Car4"))