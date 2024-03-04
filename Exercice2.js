const assert = require("assert");

Array.prototype.dedup = function() {
    const uniqueValues = [];

    this.forEach(row => {
        if (!uniqueValues.includes(row)) {
            uniqueValues.push(row)
        }    
    });

    return uniqueValues;
}

console.log([1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup());

// assert.deepStrictEqual(
//   [1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup(),
//   [1, 6, 2, 3, 4]
// );
