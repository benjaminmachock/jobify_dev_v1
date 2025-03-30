//Imports
import "./jobform.css";

export const JobForm = () => {
  //Hooks

  //Functions

  return (
    <div className="form-container">
      <form className="job-input-form">
        <input type="text" placeholder="Job Title" name="title" />
        <input type="text" placeholder="Job Description" name="description" />
        <input type="text" placeholder="Pay" name="pay" />
        <button className="job-input-btn">Submit</button>
      </form>
    </div>
  );
};
