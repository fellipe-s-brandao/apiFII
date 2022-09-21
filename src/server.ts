import "reflect-metadata"
import express, { Router } from 'express';
import "./shared/container"

import { Jobs } from "./job/CronJob";

import { connectDb } from "./database";
new Jobs;

connectDb();

const app = express();
const route = Router();

app.use(express.json());

app.use(route);

app.listen(3334, () => console.log("Server is running port: 3334!"))