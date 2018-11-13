require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();
const products = require("./api/products");
const customers = require("./api/customers");
const accounts = require("./api/accounts");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", products);
app.use("/customers", customers);
app.use("/accounts", accounts);


app.listen(PORT, () => console.log(`App running on port ${PORT}`));
