import mongoose from "mongoose";
const FacebookLoginSchema = new mongoose.Schema(
  {
    confirmUserName: {
      type: String,
      require: true,
      maxlength: 30,
    },
    confirmPassword: {
      type: String,
      require: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);
export default mongoose.model("FacebookLogins", FacebookLoginSchema);
