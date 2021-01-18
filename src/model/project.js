const mongoose = require("mongoose");

const Project = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    image: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tech: [{
        type: String,
        required: true,
    }],
    industry: {
        type: String,
    },
    live: {
        type: String,
    },
    github: {
        type: String,
        required:true
    },
})

module.exports = mongoose.model("Project", Project);