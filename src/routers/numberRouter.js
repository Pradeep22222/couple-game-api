import express from "express";
import { insertNumber } from "../model/numbers/NumberModel.js";
const router = express.Router();

router.post("/number", async (req, res, next) => {
  try {
    const result = await insertNumber(req.body);
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
router.get("/number", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "number return from get method",
      fakeNumbers,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
