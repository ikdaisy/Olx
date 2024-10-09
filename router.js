import Router from "express"
import * as rh from "./requestHandler.js"
const router = Router()

router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.signIn)
router.route("/getuser/:_id").get(rh.getUser)


export default router