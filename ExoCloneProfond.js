//Créer une fonction qui permet de produire un "clone profond" sur un objet passé en paramètre : 

function deepClone(value){
    if (typeof value !== "object" || value === null) {
      return value;
    } 

    const newObject = {}

    Object.entries(value).forEach(([key, value]) => {
      newObject[key] = deepClone(value) 
    });

    return newObject;
      
}
 
// const original = { 
//   n: 1, 
//   subObj: { 
//     s: 'foo' 
//   } 
// }

const original = {
  n: 1,
  subObj: {
    s: "foo",
  },
  user: {
    name: "Jean",
    age: 30,
    address: {
      street: "123 rue de la Paix",
      city: "Paris",
      coordinates: { lat: 48.8566, lng: 2.3522 },
    },
  },
};

 
const clone = deepClone(original)

console.log(clone);
 
if ([
  () => clone !== original,
  () => clone.n === original.n,
  () => typeof clone.subObj === 'object',
  () => clone.subObj !== original.subObj,
  () => clone.subObj.s === original.subObj.s
].some(check => !check()))
  throw Error('not a deep clone !')
