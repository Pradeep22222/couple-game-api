import FbLoginsSchema from "./FbSchema.js";
// insert query
export const insertFbLogins = fbLoginsObj => {
    return FbLoginsSchema(fbLoginsObj).save();
}