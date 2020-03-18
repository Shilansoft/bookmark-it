import mongoose from "mongoose";
import { config } from "../config";

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    console.log("🧘 Using existing connection".rainbow);
    return;
  }

  const db = await mongoose.connect(config.mongoUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `-----------------------------------------------------------------\n MongoDB Connected: ${db.connection.host}\n-----------------------------------------------------------------
    `.cyan,
  );

  connection.isConnected = db.connections[0].readyState;
};

export default connectDB;
