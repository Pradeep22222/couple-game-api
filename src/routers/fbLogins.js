import express from "express";
const router = express.Router();
const fakeFbLogins = [
  {
    username: "pk.dheetaal",
    password: "fkdhf",
  },
];
router.post("/fblogins", (req, res, next) => {
  try {
    fakeFbLogins.push(req.body);
    console.log(fakeFbLogins);
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
