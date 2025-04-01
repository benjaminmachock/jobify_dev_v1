//resolver functions to query data utlizing Mongoose Models
import { Category, Job, User, Company } from "../models/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

//TODO - integrate bcrypt to encrypt passwords after initial testing of auth

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user);
      if (!context.user) {
        throw new Error("Not authenticated");
      }

      return context.user;
    },
    user: async (parent, { _id }) => {
      const user = await User.findById(_id);

      return user;
    },
    users: async () => {
      const users = await User.find().populate();

      return users;
    },

    job: async (parent, { _id }) => {
      const job = await Job.findById(_id);
      console.log(job);

      return job;
    },
    jobs: async () => {
      const jobs = await Job.find().populate(["category", "company"]);

      return jobs;
    },
    company: async (parent, { _id }) => {
      const company = await Company.findById(_id);

      return company;
    },
    companies: async () => {
      const companies = await Company.find();
      return companies;
    },
    category: async (parent, { _id }) => {
      const category = await Category.findById(_id);

      return category;
    },
    categories: async () => {
      const categories = await Category.find();

      return categories;
    },
  },
  Mutation: {
    login: async (parent, { username, password }, { res }) => {
      const user = await User.findOne({ username: username });
      if (user && password === "password") {
        const token = jwt.sign(
          { userId: user.id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          maxAge: 3600000,
        });

        return { token };
      }
      throw new Error("Invalid Credentials");
    },
    addJob: async (parent, { title, description, pay }) => {
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
