//Imports
import { JobCard } from "../JobCard/JobCard.jsx";

export const JobList = ({ jobs }) => {
  //Hooks

  //Functions

  return (
    <div className="card-container">
      <section className="jobs">
        {jobs.map((job) => (
          <div className="card" key={job._id}>
            <JobCard key={job._id} data={job} />
          </div>
        ))}
      </section>
    </div>
  );
};
