const person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "traveling", "coding"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

const deepClone = function (object) {
  // const copy = {};
  // for (const key in object) {
  //   // if (object.hasOwnProperty(key)) {
  //   copy.key === object.key;
  //   // }
  // }

  // for (const key in mergedobject) {
  //   if (mergedobject.hasOwnProperty(key)) {
  //     console.log(`${key}: ${mergedobject[key]}`);
  //   }
  // }
  const copy = { ...object };
  return copy;
};

console.log(deepClone(person));

//The for of loop
// for (const key of person) {
//   console.log(key);
// }
