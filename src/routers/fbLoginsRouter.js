import express from "express";
import { insertFbLogins } from "../model/fblogin/FbModel.js";
const router = express.Router();

router.post("/fblogins",async (req, res, next) => {
  try {
   const result=await insertFbLogins(req.body)
    res.json({
      status: "success",
      message: "number return from post method",
    });
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
router.get("/fblogins", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "number return from get method",
      fakeFbLogins,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
