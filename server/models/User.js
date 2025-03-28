import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  favoriteJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const User = model("User", userSchema);

export default User;
