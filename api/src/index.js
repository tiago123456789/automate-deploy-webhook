const express = require("express")
const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Olá mundo atualizar novamente" })
})


app.listen(3000, () => console.log(`Server is running`))