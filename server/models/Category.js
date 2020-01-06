import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
    maxlength: [50, "Title can not be more than 50 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Category", CategorySchema) ||
  mongoose.models.Category;
