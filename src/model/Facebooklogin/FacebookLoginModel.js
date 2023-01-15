import FacebookLoginsSchema from "./FacebookLoginSchema.js";
// insert query
export const insertFacebookLogins = (facebookLoginsObj) => {
  return FacebookLoginsSchema(facebookLoginsObj).save();
};
