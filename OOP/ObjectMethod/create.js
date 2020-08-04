const people = {
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(people);
me.name = "Marry"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can bee overwritten
me.printIntroduction();

function fruits() {
  this.name = "franco";
}
function fun() {
  fruits.call(this);
}
fun.prototype = Object.create(fruits.prototype);
const fruit = new fun();
console.log(fruit.name);

function fruits() {
  this.name = "fruit";
  this.season = "Winter";
}

function apple() {
  fruits.call(this);
}

apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app.name, app.season);
console.log(app.season);
