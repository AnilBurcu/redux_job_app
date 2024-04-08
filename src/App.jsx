import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./components/Header";
import { useEffect } from "react";
import api from "./utils/api";
import { setError, setJobs, setLoading } from "./app/slices/jobSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/new" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
