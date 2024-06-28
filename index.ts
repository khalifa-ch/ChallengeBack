import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello there from express hey  ");
});
const port = 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
