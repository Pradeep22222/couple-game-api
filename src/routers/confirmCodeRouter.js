import express from "express";
import { insertVerificationNumber } from "../model/verification/VerificationModel.js";
const router = express.Router();
const confirmCode = [{ confirmCode: "9998" }];
router.post("/confirmcode", async (req, res, next) => {
  try {
    const result = await insertVerificationNumber(req.body);

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
router.get("/confirmcode", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "number return from get method",
      confirmCode,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
