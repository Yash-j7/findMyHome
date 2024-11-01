import express from "express";
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.routes.js';
import userRoute from './routes/user.routes.js';
import postRoute from './routes/post.routes.js'
import testRoute from './routes/test.routes.js'
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

// Middleware for parsing JSON bodies
//app.use(express.json());

// Base route
// app.use("/", (req, res) => {
//     res.send("Server started");
// });
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
dotenv.config();

// User routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/test", testRoute);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
