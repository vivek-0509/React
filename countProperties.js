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

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  genres: ["Fiction", "Drama"],
  getSummary: function () {
    return `${this.title} by ${this.author}, published in ${this.publishedYear}.`;
  },
};

// const mergeObjects=function(object){
//   const merge={}
//   for()
// }
// const mergedobject = { ...person, ...book };
// console.log(mergedobject);
// let c = 0;
// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     c++;
//   }
// }

// console.log(c);

const count = function (object) {
  let c = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      c++;
    }
  }
  return c;
};

console.log(count(person));
