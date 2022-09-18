import express from 'express'
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();

app.use(express.json());

app.use(route);

app.listen(3334, () => console.log("Server is running port: 3334!"))