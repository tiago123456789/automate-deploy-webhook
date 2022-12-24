const express = require("express")
const { execSync } = require("child_process")
const app = express();

app.get("/update-app", async (req, res) => {
    execSync('cd ../api && npm install && git status ', { stdio: [0,1,2] });
    return res.json({ message: "Updated application success." })
})


app.listen(8181, () => console.log(`Agent is running`))