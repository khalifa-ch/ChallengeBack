import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();



const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello there from express with typescipt ");
});
const port = 5000;
app.listen(port, () => {
  console.log(`server is running on  ${process.env.PORT}`);
});
