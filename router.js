import Router from "express"
import * as rh from "./requestHandler.js"
const router = Router()

router.route("/add").post(rh.add)


export default router