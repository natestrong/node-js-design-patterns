import * as express from "express";
import * as path from "path";

const app = express();

const verifyUser = (req, res, next) => {
    if (req.body.user) return next();
    else res.send('user not found');

    // res.send('hiiii frands')
};

const startSession = (req, res, next) => {
    return next();
};

const sendTweets = (req, res, next) => {
    res.sendFile('tweets.html', {root: path.join(__dirname)});
};

app.use(express.json());
app.post('/login', verifyUser, startSession, sendTweets);
app.use('/', (req, res) => res.status(404).send('page not found, dumb dumb'));

app.listen(80);

// import express = require("express")
//
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
