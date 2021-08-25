const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

cat.meow();

const meow2 = cat.meow;

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);
