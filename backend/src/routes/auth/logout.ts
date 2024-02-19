import { LogoutUserController } from "@/controllers/logout-user/logout-user"
import checkToken from "@/middleware/checktoken"
import { LogoutUserRepository } from "@/repositories/logout-user/mongo-logout-user"
import express from "express"

const logoutRoute = express.Router()

logoutRoute.post("/", checkToken, async (req, res) => {
  const logoutUserRepository = new LogoutUserRepository()
  const logoutUserController = new LogoutUserController(logoutUserRepository)
  const bodyFormated = {
    id: req.cookies.id,
  }
  const { body, statusCode } = await logoutUserController.handle(
    {
      body: bodyFormated,
    },
    res,
  )
  if (statusCode === 200) {
    res.clearCookie("id", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    })
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    })
  }
  return res.status(statusCode).send(body)
})

export default logoutRoute
