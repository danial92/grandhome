const express = require("express");
const router = express();
const Project = require("../models/projects_model.js"); 
const requireAuth = require('../middleware/requireAuth')


// Route for Home Page 
router.get("/homeprojects", async (req, res) => { 
    // Completed projects
    const compProjects = await Project.find({ status: "completed" })
    // Renovating projects
    const renoProjects = await Project.find({ status: "renovating" })
    // Upcoming projects
    const upcomProjects = await Project.find({ status: "upcoming" })
    // Carousel projects
    const topProjects = await Project.find({ top: 'true' })
    res.json({ compProjects: compProjects, renoProjects: renoProjects, upcomProjects: upcomProjects, topProjects: topProjects })
})


// Route for all projects
router.get("/allprojects", async (req, res) => { 
    const projects = await Project.find({})
    res.json({projects: projects})
})


// Route to create new projects
router.post("/create", requireAuth, (req, res) => {
    const { link, address, status, image, isTop } = req.body; 

    if(!link || !address || !status) { // checking if anything is missing in json body
        return res.status(404).json({ message: "Please fill all fields!" })
    }

    // Check if the requested project has same address as any project already present in database
    Project.findOne({ address: address }) 
    .then(project => {
        if(project) {
            return res.status(404).json({ message: "Property/project with this address already exists!" }); 
        }

        // Create new project and save in database
        const newProject = new Project({
            link,
            address,
            status,
            img: image,
            top: isTop
        })
        newProject.save() 
        .then(p => res.json({ message: "Project Added Successfully..!!!" }))
        .catch(err => res.json({ error: err }))
    })
})

module.exports = router;