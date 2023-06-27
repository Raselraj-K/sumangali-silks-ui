import "./App.css";
import Header from "./Components/Header";
import StaticSideBar from "./Components/StaticSideBar";
function App() {
  return (
    <div className="flex w-full">
      <StaticSideBar />
      <div className=" w-90 min-h-screen">
        <Header />
      </div>
    </div>
  );
}

export default App;
