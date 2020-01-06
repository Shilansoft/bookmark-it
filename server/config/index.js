const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  mongoUri: process.env.MONGO_URI,
};

export { config };
