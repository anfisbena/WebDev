import { Router } from "express";
import { getMessages, createMessages } from "../managers/messages.manager.js";

const router = Router();

router.get("/",async (req, res) => {
  const response = await getMessages();
  return res.send(response);
});

export default router;