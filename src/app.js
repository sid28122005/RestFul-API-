const express = require ("express");
const app = express();
require("../src/db/conn");

const router = require("./router/men");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connnection is live at port no. ${port}`);
})