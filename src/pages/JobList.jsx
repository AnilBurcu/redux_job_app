import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const JobList = () => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((i) => (
            <div key={i.id}>i</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default JobList;
