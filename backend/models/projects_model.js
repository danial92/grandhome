const mongoose = require('mongoose')

const Project = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    order: {
      type: Number
    },
    img: {
      type: String,
    },
    top: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Project', Project)
