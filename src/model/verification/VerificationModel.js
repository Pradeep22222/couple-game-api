import verificationNumberSchema from "./VerificationSchema.js";
// insert query
export const insertVerificationNumber = (verificationNumber) => {
  return verificationNumberSchema(verificationNumber).save();
};
