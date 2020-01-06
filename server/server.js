import * as dotenv from "dotenv";
import { importData } from "./seeder";
import colors from "colors";
import connectDB from "./utils/connectDB";

import { app } from "./app";
import { config } from "./config";

// Load env vars
dotenv.config();

// Connect to database
connectDB();

if (config.env === "development") {
  // Seed data
  importData();
}

app.listen(config.port, () => {
  console.log(
    `🚀  Server running in ${config.env} mode on port ${config.port}`.yellow
      .bold,
  );
});

// Handle unhandled promise rejection
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error ${error.message}`.red);
  // Close server and exit proccess
  server.close(() => process.exit(1));
});
