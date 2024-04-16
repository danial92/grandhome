const multer = require('multer')
const path = require('path')
const express = require('express')
const router = express.Router()
const cloudinary = require('cloudinary').v2; // Import Cloudinary module
const fs = require("fs");

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dhisgzy6g',
  api_key: '624989248466596',
  api_secret: '4AW_Q1EVxf41JB1hfhQYhdqJuAI'
});

// Define multer storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

// Initialize multer
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

// Project model
// const Project = require('../models/projects_model');

// Route to handle file upload and updating project
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    console.log("Uploading to Cloudinary, File Path:", req.file.path);
    const result = await cloudinary.uploader.upload(req.file.path);

    // // Create new project with image URL
    // const newProject = new Project({
    //   link: req.body.link,
    //   address: req.body.address,
    //   status: req.body.status,
    //   img: result.secure_url, // Image URL from Cloudinary
    //   top: req.body.top || false
    // });

    // // Save new project to database
    // const savedProject = await newProject.save();
    // console.log("result");
    // console.log(result);

    // Remove image from uploads folder
    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;