import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
    maxlength: [255, "Title can not be more than 255 characters"],
  },
  url: {
    type: String,
    required: [true, "Please add url"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  trash: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Link", LinkSchema) || mongoose.models.Link;
