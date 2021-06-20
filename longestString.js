let stringArray=["avenue", "car", "superstore", "cinema"]

let reducer = (accumulator,currentValue) => (accumulator.length >currentValue.length) ? accumulator : currentValue;

console.log(stringArray.reduce(reducer))
