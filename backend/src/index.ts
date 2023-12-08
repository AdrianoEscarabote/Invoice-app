import * as express from "express"
import LoginRouter from "./routes/login"

const app = express()

app.use(LoginRouter)

app.get("/home", (req, res) => {
  res.status(200).send("estou no home")
})

app.listen(4000, async () => {
  console.log("listening on port 4000")
})
