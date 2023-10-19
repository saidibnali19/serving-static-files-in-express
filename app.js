const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(express.static("public"));
// app.use("/static", express.static("public"))
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("files"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
