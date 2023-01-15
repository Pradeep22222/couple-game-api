import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/couplegame";
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
