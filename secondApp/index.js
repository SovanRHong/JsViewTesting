const express = require("express");
// this is how you import the server from the framework
const app = express();
// now it becomes a function that you excute and save it as a veriable called app ..

const path = require("path");

// app.use((req, res) => {
//   console.log("we got a request");
//   res.send("hello we got your request, this is your response");
// });

// everytime a request hits your server, this call back function will run

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// npm i ejs
// you need to make a file called views and a file inside called home.ejs for ejs to work

// the second app dot set you need to declare a path and taking your current directory name and add the /views so it would find it

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dogs", (req, res) => {
  const dogs = ["frank", "don", "cubone", "scruffy", "big red"];
  res.render("dogs", { alldogs: dogs });
});

// //taking incoming request and sending it to a path

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("rand.ejs", { rand: num });
});
// has to pass an object over which is a key value pair

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

// app.get("/r/:subreddit", (req, res) => {
//   const { subreddit } = req.params;
//   res.send(`this is a ${subreddit}`);
// });

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});

// now that you name your app, a port needs to be listening to it...
