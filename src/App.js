import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WrappedHome2 from "./Components/EnterpriseMaster";
import CreateBranch from "./Components/CreateBranch";
import BranchAndFloorDetailsComp from "./Components/BranchAndFloorDetails";
import BranchAndFloorEditComp from "./Components/BranchAndFloorEdit";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrappedHome2 />}></Route>
        <Route path="/branch-create" element={<CreateBranch />}></Route>
        <Route
          path="/branch-details"
          element={<BranchAndFloorDetailsComp />}
        ></Route>
        <Route path="/branch-edit" element={<BranchAndFloorEditComp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
