function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}
singSong();

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
greet("sovan", "hong");

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
repeat("hi", 3);
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}
console.log(add(5, 9));

function isSankeEyes(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    console.log("Snake Eyes");
  } else {
    console.log("Not Snake Eyes");
  }
}

console.log(isSankeEyes(2, 1));

function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}
rant("hi");

function capitalize(arg) {
  let firstLetter = arg.slice(0, 1).toUpperCase();
  let restarg = arg.slice(1);
  return firstLetter + restarg;
}

console.log(capitalize("How are you"));

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3]));

function returnDay(num) {
  const days = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return num > 0 && num <= 7 ? days[num] : null;
}

console.log(returnDay());

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
