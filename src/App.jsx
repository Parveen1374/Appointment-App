import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import DetailedView from "./views/DetailedView";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<DetailedView />} />
      <Route exact path="/find-doctor" element={<HomeView />} />
    </Routes>
  </>
);

export default App;
