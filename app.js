const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
        res.send("Hello Wolrd")
    })

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!")
})    