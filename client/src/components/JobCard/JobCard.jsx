//Imports
import "./jobcard.css";

export const JobCard = ({ jobs }) => {
  //Hooks

  //Functions
  console.log(jobs);

  return (
    <div className="card-container">
      <h3>Job Postings</h3>
      <section className="jobs">
        {jobs.map((job) => (
          <div className="card" key={job._id}>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <h3>{job.pay}</h3>
            <button className="card-btn">Apply</button>
            <button className="card-btn">Update</button>
            <button className="card-btn">Delete</button>
          </div>
        ))}
      </section>
    </div>
  );
};
