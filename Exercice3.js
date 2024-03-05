const assert = require("assert");

function filterObject(originObject, predicat) {
  const newObject = {};

  Object.entries(originObject).forEach(([key, value]) => {
    if (predicat(key, value)) {
      newObject[key] = value;
    }
  });

  //   key.forEach((elementKey) => {
  //     if (elementKey in originTab) {
  //       filterTab.push(elementKey);
  //     }
  //   });

  //   value.forEach((elementValue) => {
  //     if (elementValue in originTab) {
  //       filterTab.push(elementValue);
  //     }
  //   });

  return newObject;
}

console.log(
  filterObject(
    { foo: 1, bar: "hello", baz: true },
    (key, value) => key === "foo" || value === "hello"
  )
);


// assert.deepStrictEqual(
//   filterObject(
//     {
//       foo: 1,
//       bar: "hello",
//       baz: true,
//     },
//     (key, value) => key === "foo" || value === "hello"
//   ),
//   {
//     foo: 1,
//     bar: "hello",
//   }
// );
