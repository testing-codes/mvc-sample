const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require("mysql");

const con = require("../model/sqlConnection");
const query = require("../model/login.model");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username !== null && password !== null){  
        con.connect((err) => {
            if(err){
                 res.send("DB Not Connected");
            } else {
                con.query(query, [username, password], (err, found) => {
                    if(err){
                        res.send("Invalid login");
                    } else {
                        res.send("Login Sucess");
                    }
                });
                con.end();
            }
        });
    } else {
        res.send("Invalid data");
    }
});

module.exports = router;