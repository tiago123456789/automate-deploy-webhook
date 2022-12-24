const express = require("express")
const { execSync } = require("child_process")
const app = express();

app.get("/update-app", async (req, res) => {
    const { query } = req.query;
    if (query?.key !== '9874697e-8132-4d1b-a611-29885f3fac8e') {
        return res.status(403).json({ status: 403, error: "You can't execute this action" })
    }

    execSync('cd ../api && npm install && git status ', { stdio: [0,1,2] });
    return res.json({ status: 200, message: "Updated application success." })
})


app.listen(8181, () => console.log(`Agent is running`))