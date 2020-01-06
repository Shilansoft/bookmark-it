import express from "express";
const router = express.Router();

import {
  getLink,
  getLinks,
  createLink,
  updateLink,
  deleteLink,
} from "../controllers/links";

router
  .route("/")
  .get(getLinks)
  .post(createLink);

router
  .route("/:id")
  .get(getLink)
  .put(updateLink)
  .delete(deleteLink);

export default router;
