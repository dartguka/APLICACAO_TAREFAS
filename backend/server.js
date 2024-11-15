const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(cors());
app.use(bodyParser.json());


app.use("/api/tasks", require("./routes/tasks"));


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
