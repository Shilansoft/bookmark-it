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
    unique: true,
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
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

LinkSchema.pre("save", (next) => {
  // TODO: Some stuff to be added here later on

  next();
});

export default mongoose.model("Link", LinkSchema) || mongoose.models.Link;
