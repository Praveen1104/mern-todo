const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/routes");
require("./models/db");
app.use(cors());
const port = process.env.PORT || 9000;
app.use("/api/task", router);

app.use(express.json());
app.listen(port, () => console.log("connected to `${port}`"));
