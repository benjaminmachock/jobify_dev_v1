//Imports
import "./jobcard.css";

export const JobCard = (props) => {
  //Hooks
  console.log(props);

  //Functions

  return (
    <div className="card-container">
      <h3>Job Postings</h3>
      <section className="jobs">
        <div className="card">
          <h3>Job1</h3>
          <h4>Owner</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur sunt ea voluptas fugit minus impedit.
          </p>
          <button className="card-btn">Apply</button>
          <button className="card-btn">Update</button>
          <button className="card-btn">Delete</button>
        </div>
        <div className="card">
          <h3>Job2</h3>
          <h4>Owner</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur sunt ea voluptas fugit minus impedit.
          </p>
          <button className="card-btn">Apply</button>
        </div>
        <div className="card">
          <h3>Job3</h3>
          <h4>Owner</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur sunt ea voluptas fugit minus impedit.
          </p>
          <button className="card-btn">Apply</button>
        </div>
        <div className="card">
          <h3>Job4</h3>
          <h4>Owner</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur sunt ea voluptas fugit minus impedit.
          </p>
          <button className="card-btn">Apply</button>
        </div>
      </section>
    </div>
  );
};
