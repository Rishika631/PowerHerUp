
//import aposToLexForm from "apos-to-lex-form";
//import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
//import SpellCorrector from "spelling-corrector";
//import stopword from "stopword";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const companyModel = require("./models1/company");
const natural = require('natural');
const { WordTokenizer } = natural;
const aposToLexForm = require('apos-to-lex-form');
const tokenizer = new WordTokenizer();
const stopword = require('stopword');
const SpellCorrector = require('spelling-corrector');
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority"
    
    //"mongodb+srv://rishika:%40Rishika0110@cluster1.hvpmllg.mongodb.net/rishika?retryWrites=true&w=majority"
    
  );

/*mongoose.connect("mongodb+srv://rishikaagrawal2020:@Rishika0110@cluster0.mp6lgeu.mongodb.net/user?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log(`connection sucessful`);
  })
  .catch((err) => console.log(err));*/

  app.get("/getUsers", (req, res) => {
    companyModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
  

const { SentimentAnalyzer, PorterStemmer } = natural;
const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");

/* for html 
app.get("/", (req, res) => {
    res.render('/index.html');
  });*/



function getSentiment(str) {
const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");

const tokenized = tokenizer.tokenize(lexed);

const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));

const stopWordsRemoved = stopword.removeStopwords(fixedSpelling);

const analyzed = analyzer.getSentiment(stopWordsRemoved);
if (!str.trim()) {
return 0;
}

if (analyzed >= 1) return 1; // positive
if (analyzed === 0) return 0;
return -1;
}

app.post("/createUser", async (req, res) => {
  //const user = req.body;
  const { company, wp, review } = req.body;
  const score=getSentiment(review);
  const newUser = companyModel({
    company, 
    wp, 
    review,
    score
  });
  //const newUser = new UserModel(user);
  const user=await newUser.save();
  res.json(user);
});

app.listen(3004, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

/*front end part <button onClick={(event) => {
          {createUser};
          setScore(getSentiment(review));
        }}>Create User </button>*/







