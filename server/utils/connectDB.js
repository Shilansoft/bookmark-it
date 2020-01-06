import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    console.log("🧘 Using existing connection".rainbow);
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
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
