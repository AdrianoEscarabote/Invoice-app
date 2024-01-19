import { MongoLoginUserRepository } from "@/repositories/login-user/mongo-login-user"
import { Router } from "express"
import { LoginUserController } from "@/controllers/login-user/login-user"

const LoginRoute = Router()

LoginRoute.post("/", async (req, res) => {
  const mongoLoginUserRepository = new MongoLoginUserRepository()

  const mongoLoginUserController = new LoginUserController(
    mongoLoginUserRepository,
  )

  const { body, statusCode } = await mongoLoginUserController.handle(
    {
      body: req.body,
    },
    res,
  )

  res.status(statusCode).send(body)
})

export default LoginRoute
