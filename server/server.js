import * as dotenv from "dotenv";
import { app } from "./app";
import { config } from "./config";
dotenv.config();

app.listen(config.port, () => {
  console.log(`✅ App running on port ${config.port}`);
});
