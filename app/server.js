const express = require("express");
const path = require("path");
const os = require("os");

const app = express();


app.get("/", (req, res) => {
    res.send(`<h1>Server is running on ${os.hostname()}</h1>`);
});

app.use(express.static(path.join(__dirname)));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
