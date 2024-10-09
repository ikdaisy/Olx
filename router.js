import Router from "express"
import * as rh from "./requestHandler.js"
import Auth from "./middleware/auth.js"
const router = Router()

router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.signIn)
router.route("/getuser/").get(Auth,rh.getUser)




export default router