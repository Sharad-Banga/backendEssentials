import express from "express";
import { UserRouter } from "./routes/user.js";

import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/user",UserRouter);

app.listen(3000)