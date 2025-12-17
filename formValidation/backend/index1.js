import express from "express";
const app = express();
import {z} from 'zod';

import rateLimit from "express-rate-limit";
const limitMid = rateLimit({
  
})

app.use(express.json());

const requiredBody = z.object({
  email : z.string().includes('@'),
  password : z.string()
              .min(8)
              .max(8)
              .regex(/[A-Z]/)
              .regex(/[0-9]/)
            })


app.post('signup',(req,res)=>{

  const isformatCorrect  = requiredBody.safeParse(req.body);
})