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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Job = model("Job", jobSchema);

export default Job;
