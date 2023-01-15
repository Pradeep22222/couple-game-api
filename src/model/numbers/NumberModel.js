import NumberSchema from "./NumberSchema.js";
// insert query
export const insertNumber = numberObj => {
    return NumberSchema(numberObj).save();
}