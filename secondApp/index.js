const express = require("express");
// this is how you import the server from the framework
const app = express();
// now it becomes a function that you excute and save it as a veriable called app ..

// app.use((req, res) => {
//   console.log("we got a request");
//   res.send("hello we got your request, this is your response");
// });

// everytime a request hits your server, this call back function will run

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

//taking incoming request and sending it to a path

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`this is a ${subreddit}`);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});

// now that you name your app, a port needs to be listening to it...
