import mongoose, { Schema } from "mongoose";
mongoose.connect('mongodb+srv://sharad_banga:sharad@cluster0.8vv4o.mongodb.net/');
const userSchema = new Schema({
    userName: String,
    password: String
});
const userModel = mongoose.model("user", userSchema);
export { userModel };
//# sourceMappingURL=db.js.map