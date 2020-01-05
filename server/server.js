import * as dotenv from "dotenv";
import colors from "colors";

import { app } from "./app";
import { config } from "./config";
dotenv.config();

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
