import express from "express";
import numberRouter from "./src/routers/numberRouter.js";
const app = express();
const PORT = 8000;
app.use("/api/v1/game", numberRouter);

app.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`server is running on the port ${PORT}`);
});
