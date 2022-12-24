const express = require("express")
const { execSync } = require("child_process")
const app = express();

const key = '9874697e-8132-4d1b-a611-29885f3fac8e'

app.post("/update-app", async (req, res) => {
    const { query } = req;
    if (query.key != key) {
        return res.status(403).json({ status: 403, error: "You can't execute this action" })
    }

    execSync(`cd ../api && git fetch && git checkout master && git pull origin master && npm install && pm2 restart api`, { stdio: [0,1,2] });
    return res.json({ status: 200, message: "Updated application success." })
})


app.listen(8181, () => console.log(`Agent is running`))