import { Schema, model } from "mongoose";

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
});

const Job = model("Job", jobSchema);

export default Job;
