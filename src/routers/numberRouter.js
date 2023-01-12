import express from "express";
const router = express.Router();
const fakeNumbers = [
  {
    "urNumber": 937549234,
    "partnerNumber":853257
  }
]
router.post("/number", (req, res, next) => {
  try {
    fakeNumbers.push(req.body);
    console.log(fakeNumbers)
    res.json({
      status: "success",
      message: "number return from post method",
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
