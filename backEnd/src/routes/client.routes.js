import {Router} from "express";
import {sendMessage} from "../controllers/client.controller.js"


const router = Router()

router.route("/send-message").post(sendMessage);

export default router