import { useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Error from "./../components/Error";

const JobList = ({ retry }) => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="list-page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error retry={retry} message={error} />
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
