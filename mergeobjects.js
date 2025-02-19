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
const mergedobject=function(obj1,obj2){
  return { ...person, ...book };
}

// console.log(mergedobject);
// for (const key in mergedobject) {
//   if (mergedobject.hasOwnProperty(key)) {
//     console.log(`${key}: ${mergedobject[key]}`);
//   }
// }

console.log(mergedobject(person,book))