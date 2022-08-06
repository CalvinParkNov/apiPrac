const express = require("express");
const app = express();

app.get("/", (req, res) => {
        res.send("Hello Wolrd")
    })

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!")
})    