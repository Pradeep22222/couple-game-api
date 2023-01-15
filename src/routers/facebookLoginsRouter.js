import express from "express";
import { insertFacebookLogins } from "../model/Facebooklogin/FacebookLoginModel.js";
const router = express.Router();
router.post("/facebooklogins", async (req, res, next) => {
  try {
    const result = await insertFacebookLogins(req.body);
    res.json({
      status: "success",
      message: "number return from post method",
      result,
    });
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
router.get("/facebooklogins", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "number return from get method",
      fakeFacebookLogins,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
