//Imports
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../../utils/mutations.js";
import "./jobform.css";

export const JobForm = () => {
  //Hooks
  const [jobFormData, setJobForm] = useState({
    title: "",
    description: "",
    pay: "",
  });

  const [addJob, { error }] = useMutation(ADD_JOB);

  //will trigger mutation on backend

  //Functions

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobForm({ ...jobFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addJob({
        variables: { ...jobFormData },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }

    setJobForm({
      title: "",
      pay: "",
      description: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Add Job</h1>
      <form className="job-input-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          name="title"
          onChange={handleInputChange}
          value={jobFormData.title}
        />
        <input
          type="text"
          placeholder="Job Description"
          name="description"
          onChange={handleInputChange}
          value={jobFormData.description}
        />
        <input
          type="text"
          placeholder="Pay"
          name="pay"
          onChange={handleInputChange}
          value={jobFormData.pay}
        />
        <button className="job-input-btn">Submit</button>
      </form>
    </div>
  );
};
