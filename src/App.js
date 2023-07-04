import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WrappedComponent from "./Components/BranchList";
import CreateBranch from "./Components/CreateBranch";
import BranchAndFloorDetailsComp from "./Components/BranchDetails";
import BranchAndFloorEditComp from "./Components/EditBranch";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrappedComponent />}></Route>
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
