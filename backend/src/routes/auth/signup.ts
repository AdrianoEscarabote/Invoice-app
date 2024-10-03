import { SignupUserController } from "@/controllers/signup-user/signup-user"
import { MongoSignupUserRepository } from "@/repositories/signup-user/mongo-signup-user"
import { Router } from "express"

const SignupRoute = Router()

SignupRoute.post("/", async (req, res) => {
  const signupUserRepository = new MongoSignupUserRepository()

  const signupUserController = new SignupUserController(signupUserRepository)

  const { body, statusCode } = await signupUserController.handle(
    {
      body: req.body,
    },
    res,
  )

  res.status(statusCode).send(body)
})

export default SignupRoute
