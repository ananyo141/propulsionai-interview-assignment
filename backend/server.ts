import express from "express";
import type {Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./src/db";
import dotenv from "dotenv";
dotenv.config();

import itemRouter from "./src/routes/items.routes";

// Use express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Ping route
app.get("/", (_req: Request, _res: Response) => _res.status(200).send('hi'));
app.use('/items', itemRouter);

const port = 3000;

try {
    // connect to database
    connectDB(process.env.MONGO_URI).then(() => {

    console.log('Connected to db')
  
    // Server setup
    app.listen(port, () => {
      console.log(`Server listening on -> PORT ${port}`);
    });
    });
  } catch (error) {
    console.error(error);
  }