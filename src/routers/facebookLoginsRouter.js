import express from "express";
const router = express.Router();
const fakeFacebookLogins = [
  {
    username: "pk.dheetaal",
    password: "fkdhf",
  },
];
router.post("/facebooklogins", (req, res, next) => {
  try {
    fakeFacebookLogins.push(req.body);
    console.log(fakeFacebookLogins);
    res.json({
      status: "success",
      message: "number return from post method",
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
