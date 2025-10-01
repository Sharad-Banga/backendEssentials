import mongoose, { Schema } from "mongoose";

const ObjectId = mongoose.ObjectId;

mongoose.connect("mongodb+srv://sharad_banga:sharad@cluster0.8vv4o.mongodb.net/");

const UserSchema = Schema({
  username : String,
  password : String
});

const SessionSchema = Schema({
  userId : ObjectId,
  sessionId : String
});

const UserModel = mongoose.model("Users",UserSchema);
const SessionModel = mongoose.model("Sessions",SessionSchema);

export {UserModel,SessionModel};