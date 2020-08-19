const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 8080;


app.get("/", (req, rsp) => {
	rsp.send(fs.readFileSync("./index.html", "utf8"));
});

app.listen(PORT, () => console.log("Server up at " + PORT));

