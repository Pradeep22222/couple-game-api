import mongoose from "mongoose";
const fbSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      maxlength: 15,
    },
    partnerNumber: {
      type: String,
      require: true,
      maxlength: 15,
    },
  },
  { timestamps: true }
);
export default mongoose.model("FbLogins", fbSchema);
