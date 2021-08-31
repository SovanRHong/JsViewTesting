const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const product = document.querySelector("#product");
const quanity = document.querySelector("#qty");

// form.addEventListner("submit", function (e) {
//   e.preventDefault();

//   const productInput = product.elements.prdt;
//   const quanityInput = quanity.elements.qtys;

//   addInputValue(productInput, quanityInput);
//   productInput.value = "";
//   quanityInput.value = "";
// });

// const addInput = (prdt, qtys) => {
//   const newPrdt = documents.createElements("li");
//   const newQtys = documents.createElements("li");
//   newPrdt.append(prdt);
//   newQtys.append(qtys);
// };

const form = document.querySelector("form");
const product = document.querySelector("#product");
const quantity = document.querySelector("#qty");

const groceryList = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newList = document.createElement("li");
  newList.innerHTML = `${quantity.value} ${product.value}`;
  groceryList.appendChild(newList);
  quantity.value = "";
  product.value = "";
});
