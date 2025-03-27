//resolver functions to query data utlizing Mongoose Models
import { Job } from "../models/index.js";

const resolvers = {
  Query: {
    jobs: async () => {
      const jobs = await Job.find();

      return jobs;
    },
  },
};

export default resolvers;
