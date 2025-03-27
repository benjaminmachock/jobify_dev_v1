//resolver functions to query data utlizing Mongoose Models
import { Job } from "../models/index.js";

const resolvers = {
  Query: {
    jobs: async () => {
      const jobs = await Job.find();

      return jobs;
    },
  },
  Mutation: {
    createJob: async (parent, { title, description, pay }) => {
      const job = await Job.create({ title, description, pay });
      return job;
    },
    removeJob: async (parent, { _id }) => {
      const job = await Job.deleteOne({ _id });
      return job;
    },
    updateJob: async (parent, { _id, title, description, pay }) => {
      const job = await Job.findOneAndUpdate(
        { _id, title, pay, description },
        { new: true }
      );
      // console.log(job);
      return job;
    },
  },
};

export default resolvers;
