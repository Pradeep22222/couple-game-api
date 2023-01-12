import express from "express";
import numberRouter from "./src/routers/numberRouter.js";
const app = express();
const PORT = 8000;
// middlewares
app.use(express.json());
app.use("/api/v1/game", numberRouter);
app.use("/", (req, res) => {
  res.json({ 
    status: "success",
    message:"you reached to the couple game api"
  })
})
app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message
  })
});
app.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`server is running on the port ${PORT}`);
});
