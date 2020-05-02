const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require("mysql");

const con = require("../model/sqlConnection");
const query = require("../model/register.model");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    if(username !== null && password !== null && mail !== null){  
        con.connect((err) => {
            if(err){
                 res.send("DB Not Connected");
            } else {
                con.query(query, [username, mail, password, 1], (err) => {
                    if(err){
                        res.send("Insertion failed");
                    } else {
                        res.send("Inserted succesfully");
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