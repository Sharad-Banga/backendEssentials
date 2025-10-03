import express from "express";
import {z} from "zod";

const app = express();
app.use(express.json());


//zod validation

const zotPasses = z.object({
  email : z.string().includes("@"),
  password : z.string()
              .min(8)
              .max(8)
              .regex(/[A-Z]/)
              .regex(/[0-9]/)
})


app.post("/signupp",(req,res)=>{
  // console.log("sss");
  const zoo = zotPasses.safeParse(req.body);

  if(zoo.success){
    
    
    res.json({
      "messgae" : "ho gya bhaii"
    })
  }
  else{
    res.json({
      "messgae" : "noooooooooooooooo"
    })
  }

})


app.listen(3000,()=>{
  console.log("seveeee.........");
  
})