import mongoose from "mongoose";
const numberSchema = new mongoose.Schema({
  urNumber: {
    type: String,
    require: true,
    maxlength: 12,
  },
  partnerNumber: {
    type: String,
    require: true,
    maxlength: 12,
  },
},{timestamps:true});
export default mongoose.model("Number", numberSchema)