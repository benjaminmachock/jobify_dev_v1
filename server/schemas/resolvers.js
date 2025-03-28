//resolver functions to query data utlizing Mongoose Models
import { Category, Job, User, Company } from "../models/index.js";

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find().populate();

      return users;
    },
    jobs: async () => {
      const jobs = await Job.find().populate(["category", "company"]);

      return jobs;
    },
    companies: async () => {
      const companies = await Company.find();
      return companies;
    },
    categories: async () => {
      const categories = await Category.find();

      return categories;
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
        { _id },
        { title, pay, description },
        { new: true }
      );
      // console.log(job);
      return job;
    },
    createCompany: async (parent, { name, address, phone, owner }) => {
      const company = await Company.create({ name, address, phone, owner });
      return company;
    },
    updateCompany: async (parent, { _id, name, address, phone, owner }) => {
      const company = await Company.findOneAndUpdate(
        { _id },
        { name, address, phone, owner },
        { new: true }
      );

      console.log(company);

      return company;
    },
    removeCompany: async (parent, { _id }) => {
      const company = await Company.deleteOne({ _id });
      return company;
    },
  },
};

export default resolvers;
