import express from "express";
const router = express.Router();

router.post("/number", (req, res) => {
  try {
     res.json({
       status: "success",
       message: "number return from post method",
     });
  } catch (error) {
    
  }
 
});
router.get("/number", (req, res) => {
  try {
      res.json({
        status: "success",
        message: "number return from get method",
      });
  } catch (error) {
    
  }

});
export default router;