import { UserModel } from "../db";


async function UserAuthMiddleware(req,res,next){

  const {username , password} = req.body;

  const user = UserModel.find({
    username
  });

  if(user){
    
  }
}