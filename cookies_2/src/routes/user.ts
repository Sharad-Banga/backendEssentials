import { Router } from "express";
import { userModel } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userRouter = Router();


userRouter.post('/signup',(req,res)=>{

  const {userName , password}  = req.body;
  const hashedPassword = bcrypt.hashSync(password,8);

  try{
      userModel.create({
        userName,
        password : hashedPassword
      })
      res.json({
        "message" : "signup ho gea"
      })
  }catch(e){
    res.json({
      "msg":"nhi hua signup"
    })
  }
})



userRouter.post('/signin',async (req,res)=>{

  const {userName , password}  = req.body;
  const user = await userModel.findOne({
    userName
  });

  if(user && password){

    const isPassCorrect = await bcrypt.compare(password as string , user.password as string );
    let sessionToken = "";
    if(isPassCorrect){
        sessionToken = jwt.sign({id:user._id},"SHARAD256")
    }
    
    res.cookie("sessionToken",sessionToken,{
      maxAge:60*60*60*24,
      httpOnly:true
    })
    res.json({
      "mesg":"signin ho gea"
    })
  }

  else{
    res.json({
      "msg":"signin failed"
    })
  }


  
})


userRouter.get('/courses',(req,res)=>{

  const {sessionToken} = req.cookies;
  const verification = jwt.verify(sessionToken,"SHARAD256");

  if(verification){
    res.json({
      "bhiyaa aap jeete" :"ye lo courses"
    })
  }
  else{
    res.json({
      "msg":"bhai signin krle"
    })
  }

})






export {userRouter};