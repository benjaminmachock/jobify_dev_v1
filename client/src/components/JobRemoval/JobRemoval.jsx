//Imports
// import { useMutation, useParams } from "@apollo/client";
// import { REMOVE_JOB } from "../../utils/mutations";
import "./jobremoval.css";

export const JobRemoval = () => {
  //Hooks
  // const [removeJob, {error}] = useMutation(REMOVE_JOB)
  //   //Functions

  //   handleRemoveJob() {

  //   }

  return (
    <div className="form-container">
      <h1>Are you sure you want to delete this job?</h1>
      <button className="jobRemoval-input-btn">Yes, Please Delete</button>
    </div>
  );
};
