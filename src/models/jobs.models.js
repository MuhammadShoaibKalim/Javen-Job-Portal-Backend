import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    jobtitle: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    experienceInYear: { type: Number, required: true },
    salaryInLPA: { type: Number, required: true },
    jobdescription: { type: String, required: true }
},{timestamps:true});

const Jobs = mongoose.model("Jobs", JobSchema);

export default Jobs;
