//Imports
import "./jobupdate.css";

export const JobUpdateForm = () => {
  //Hooks

  //Functions

  return (
    <>
      <div className="form-container">
        <form className="jobUpdate-input-form">
          <input type="text" placeholder="Job Title" name="title" />
          <input type="text" placeholder="Job Description" name="description" />
          <input type="text" placeholder="Pay" name="pay" />
          <button className="jobUpdate-input-btn">Submit</button>
        </form>
      </div>
    </>
  );
};
