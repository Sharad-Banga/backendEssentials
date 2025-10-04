import express from "express";
import {z} from "zod";
import rateLimit from "express-rate-limit";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const limitMiddleware = rateLimit({
  windowMs : 60 * 1000,
  max : 5,
  message : {error : "too many attempts"}
})

//zod validation

const zotPasses = z.object({
  email : z.string().includes("@"),
  password : z.string()
              .min(8,"at least 8 char")
              .max(8,"at most 8 char")
              .regex(/[A-Z]/,"must contain A-Z")
              .regex(/[0-9]/,"must contain a-z")
})


app.post("/signupp",limitMiddleware,(req,res)=>{
  // console.log("sss");
  const zoo = zotPasses.safeParse(req.body);

  if(zoo.success){
    
    console.log("chl gea backend bhai");
    
    res.json({
      "messgae" : "ho gya bhaii"
    })
  }
  else{
    console.log("nhi chala backend bhai");
    res.json({
      "messgae" : "noooooooooooooooo",
      "erroe" : zoo.error.message
    })
  }

})


app.listen(3000,()=>{
  console.log("seveeee.........");
  
})