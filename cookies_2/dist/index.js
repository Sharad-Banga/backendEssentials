import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/user', userRouter);
app.listen(3000);
//# sourceMappingURL=index.js.map