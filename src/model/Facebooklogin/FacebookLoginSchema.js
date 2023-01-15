import mongoose from "mongoose";
const FacebookLoginSchema = new mongoose.Schema(
  {
    confirmUserName: {
      type: String,
      require: true,
      maxlength: 15,
    },
    confirmPassword: {
      type: String,
      require: true,
      maxlength: 15,
    },
  },
  { timestamps: true }
);
export default mongoose.model("FacebookLogins", FacebookLoginSchema);
