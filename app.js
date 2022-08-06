require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./db/connect"); 

app.get("/", (req, res) => {
        res.send("Hello Wolrd")
    })
    const start = async () => {
        try {
          await connectDB(process.env.MONGO_URI);
          app.listen(port, console.log(`Server is listening port ${port}....`));
        } catch (error) {
          console.log(error);
        }
      };
    start();