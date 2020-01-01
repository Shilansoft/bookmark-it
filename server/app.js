import express from "express";
import morgan from "morgan";

const app = express();

// Routings
import indexRouter from "./routes/index";

// Middlewares
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

export { app };
