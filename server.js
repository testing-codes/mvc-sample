const express = require("express");
const bodyParser = require("body-parser");

const login = require("./controller/login.controller");
const register = require("./controller/register.controller");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/login", login);
app.use("/register", register);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is listening to the port " + port);
});