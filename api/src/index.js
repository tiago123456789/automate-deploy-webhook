const express = require("express")
const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Hello world! Olá mundo" })
})


app.listen(3000, () => console.log(`Server is running`))