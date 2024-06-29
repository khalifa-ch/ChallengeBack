import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRouter from "./routes/Employee.route";
dotenv.config();

const app: Express = express();
app.use(express.json()); // JSON data

mongoose
  .connect(process.env.DB as string)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", employeeRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on  ${process.env.PORT}`);
});
