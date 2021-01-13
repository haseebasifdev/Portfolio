const mongoose = require("mongoose");

const Project = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
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
        required: true,
    },
    live: {
        type: String,
    },
    github: {
        type: String,
    },
})

module.exports = mongoose.model("Project", Project);