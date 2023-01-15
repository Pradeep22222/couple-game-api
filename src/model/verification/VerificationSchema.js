import mongoose from "mongoose";
const ConfirmationSchema = new mongoose.Schema(
  {
    confirmationCode: {
      type: String,
      require: true,
      maxlength: 15,
    },
  },
  { timestamps: true }
);
export default mongoose.model("confirmationNumber", ConfirmationSchema);
