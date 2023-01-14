import express from "express";
const router = express.Router();
const confirmCode = [{confirmCode:"9998"}];
router.post("/confirmcode", (req, res, next) => {
  try {
    confirmCode.push(req.body);
    console.log(confirmCode);
    res.json({
      status: "success",
      message: "number return from post method",
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
