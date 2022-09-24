process.env.TZ = "America/Sao_Paulo"
import "reflect-metadata"
import express, { Router } from 'express';
import "./shared/container"

import "./database";
import { Jobs } from "./job/CronJob";

new Jobs;


const app = express();
const route = Router();

app.use(express.json());

app.use(route);

app.listen(3334, () => console.log("Server is running port: 3334!"))