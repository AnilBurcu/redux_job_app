import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./components/Header";
const App = () => {
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
