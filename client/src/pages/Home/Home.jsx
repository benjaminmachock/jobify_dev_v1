//Imports
import { useQuery } from "@apollo/client";
import { JobList } from "../../components/JobList/JobList.jsx";
import { QUERY_JOBS } from "../../utils/queries";
import "./home.css";

export const Home = () => {
  //Hooks
  const { loading, data } = useQuery(QUERY_JOBS);

  const jobs = data?.jobs || [];

  //Functions

  return (
    <div className="home">
      {loading ? (
        <div>Currently loading data....</div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};
