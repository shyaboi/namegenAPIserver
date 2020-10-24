const fs = require ('fs')
const words = require("./dict")
const path = require("path");
const express = require("express");
const app = express(); // express app
const PORT = process.env.PORT || 5555
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", (req, res) => {
 
    res.send('This is the head of a headless server ( ͡° ͜ʖ ͡°)');
  });



  app.get("/alpha/:letter?", (req, res) => {

    console.log(req.params.letter)
    let wordCache = []
    var myFunc = function (letter) {
      for (var i = 0; i < letter.length; i += 1) {
          // Use the index i here
          if (letter[i].charAt(0)==req.params.letter){
          // console.log(letter[i]);
          wordCache.push(letter[i])
        }
      }
  }
  myFunc(words)
    res.send(wordCache);
  });


  app.get("/multi/:number?", (req, res) => {
    console.log(req.params.number)
    let wordCache = []
    for (let i = 0; i < req.params.number; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
    }
        // console.log(wordCache)
    res.send(wordCache);
  });


  app.get("/1", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    res.send(wordCache);
  });


app.get("/10", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 10; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/100", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 100; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/1000", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 1000; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/10000", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 10000; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/100000", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 100000; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });
  
  // start express server on port 5000
  app.listen(PORT, () => {
    console.log("server started on port "+PORT);
  });