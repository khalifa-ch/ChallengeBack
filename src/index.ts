import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app: Express = express();
app.use(express.json()); // JSON data


mongoose.connect(process.env.DB as string)
.then(()=>{
    console.log('Mongodb connected')
}).catch(err=>{
    console.log(err)
})

app.get("/", (req: Request, res: Response) => {
  res.send("hello there from express with typescipt ");
});
app.listen(process.env.PORT, () => {
  console.log(`server is running on  ${process.env.PORT}`);
});
