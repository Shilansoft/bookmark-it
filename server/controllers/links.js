import Link from "../models/Link";

// ─── GET LINK ───────────────────────────────────────────────────────────────────
// @desc    Get single link
// @route   GET /api/v1/links/:id
// @access  Private
export const getLink = async (req, res, next) => {
  try {
    const link = await Link.findById(req.params.id);
    if (!link) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// ─── GET LINKS ──────────────────────────────────────────────────────────────────
// @desc    Get all links
// @route   GET /api/v1/links
// @access  Private
export const getLinks = async (req, res, next) => {
  try {
    const links = await Link.find();
    if (!links) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      count: links.length,
      data: links,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// ─── CREATE LINK ────────────────────────────────────────────────────────────────
// @desc    Create new link
// @route   POST /api/v1/links
// @access  Private
export const createLink = async (req, res, next) => {
  try {
    const link = await Link.create(req.body);
    res.status(201).json({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// ─── DELETE LINK ────────────────────────────────────────────────────────────────
export const deleteLink = async (req, res, next) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);
    if (!link) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// ─── UPDATE LINK ────────────────────────────────────────────────────────────────
export const updateLink = async (req, res, next) => {
  try {
    const link = await Link.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!link) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      status: true,
      data: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
