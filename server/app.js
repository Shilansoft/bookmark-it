import express from "express";
import morgan from "morgan";
// Routings
import indexRouter from "./routes/index";
import { config } from "./config";

const app = express();

// Middlewares

if (config.env === "development") {
  app.use(morgan("combined"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

export { app };
