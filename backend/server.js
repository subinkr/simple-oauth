const express = require("express");
const cors = require("cors");
const router = require("./src/router");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", router);

app.listen(4000, () => {
    console.log("Listening on 4000");
});
