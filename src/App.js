import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WrappedHome from "./Components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrappedHome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
