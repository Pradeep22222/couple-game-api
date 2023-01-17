import mongoose from "mongoose";
const fbSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      maxlength: 50,
    },
    password: {
      type: String,
      require: true,
      maxlength: 30,
    },
  },
  { timestamps: true }
);
export default mongoose.model("FbLogins", fbSchema);
