import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(5000, () => console.log("Server running on http://localhost:5000"));