// env
import { config } from "dotenv"
const port = process.env.PORT || 7000

// database
import { MongoClient } from "./database/mongo"

// express
import express, { Request, Response, NextFunction } from "express"

// cookie-parser
import cookieParser = require("cookie-parser")

// cors
import cors from "cors"

// configures the cors to allow only one origin
const corsOptions = {
  credentials: true,
  origin: "https://invoice-app-adrianoescarabotes-projects.vercel.app",
}

// routers
import authRouter from "./routes/auth/auth"
import InvoiceRouter from "./routes/invoice/invoice"

const main = async () => {
  config()

  const app = express()

  app.use(express.json())
  app.use(cookieParser())
  app.use(cors(corsOptions))
  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header(
      "Access-Control-Allow-Origin",
      "https://invoice-app-adrianoescarabotes-projects.vercel.app",
    )
    res.header("Access-Control-Allow-Credentials", "true")
    next()
  })

  await MongoClient.connect()

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!")
  })

  app.use("/auth", authRouter)
  app.use("/invoice", InvoiceRouter)

  app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
  })
}

main()
