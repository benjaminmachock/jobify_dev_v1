//Imports
import "./jobform.css";

export const JobForm = () => {
  //Hooks

  //will trigger mutation on backend

  //Functions

  return (
    <div className="form-container">
      <h1>Add Job</h1>
      <form className="job-input-form">
        <input type="text" placeholder="Job Title" name="title" />
        <input type="text" placeholder="Job Description" name="description" />
        <input type="text" placeholder="Pay" name="pay" />
        <button className="job-input-btn">Submit</button>
      </form>
    </div>
  );
};
