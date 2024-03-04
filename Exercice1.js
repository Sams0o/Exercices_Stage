const assert = require("assert");

function categorize(values) {
    const objetCles = {}

    values.forEach(elementValue => {
      let type = typeof elementValue;
      
      if (type in objetCles) {
        objetCles[type].push(elementValue)
      } else {
        objetCles[type] = [elementValue]
      }  
    });


  return objetCles;
}


console.log(
  categorize([
    1,
    "hello",
    function sayHi() {
      console.log("hi");
    },
    "world",
    true,
    0n,
    1000,
  ])
);

// assert.deepStrictEqual(
//   categorize([1, "hello", sayHi, "world", true, 0n, 1000]),
//   {
//     number: [1, 1000],
//     string: ["hello", "world"],
//     function: [sayHi],
//     boolean: [true],
//     bigint: [0n],
//   }
// );


