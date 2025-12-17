import { Router } from "express";
import { UserModel,SessionModel } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserRouter = Router();

UserRouter.post("/signup",async(req,res)=>{

  const {username , password} = req.body;
  
  try{
    const hashedPass = await bcrypt.hash(password,7);
    await UserModel.create({
      username,
      password:hashedPass
    });
    res.json({
      "messgae":"signed UPP"
    })
  }
  catch(e){
    res.json({
      "messgae" : e
    })
  }
});

UserRouter.post("/signin",async (req,res)=>{

      const {username , password} = req.body;

      const user = await UserModel.findOne({
        username,
      })

      if(!user){
        res.json({
          "message" : "signup krle bhai"
        })
      }
      else{
        const isUserPassCorrect = await bcrypt.compare(password , user.password);
        if(isUserPassCorrect){

          const sessionIdToken = jwt.sign({id: user._id} , "sharad@1234");

          SessionModel.create({
          
            userId:user._id,
            sessionId : sessionIdToken
          })
          
          res.cookie("sessiontoken",sessionIdToken,{
            httpOnly:true,
            secure:false,
            maxAge:1 * 1 * 60 * 1000
          })

          res.json({
            "messgae":"signed innnnnnnnnnnnn"
          })
        }else{
          res.json({
            "messgae":"pass glt hai"
          })
        }
      }
});




UserRouter.get("/dash",(req,res)=>{
  const {sessiontoken} = req.cookies;

  const u = jwt.verify(sessiontoken,"sharad@1234");

  if(u){
    console.log("wwwwwwwww",u);
  }

  res.json({
    "iddd":u.id
  })
});

UserRouter.post("/logout",async(req,res)=>{

  const {sessiontoken} = req.cookies;
  const u = jwt.verify(sessiontoken,"sharad@1234");

  if(u){

    res.clearCookie("sessiontoken",{
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    })

    res.json({
      "message":"LOGOUT DONE"
    })
  }

  

})



export {UserRouter};