const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const router = require("../backend/routes/route") 

app.use(cors());
app.use(bodyParser.json());
app.use("/user",router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});