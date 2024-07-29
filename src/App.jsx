import "../src/styles/App.css";
import Heading from "./components/Heading";
import InputAndOutput from "./components/InputAndOutput";

function App() {
  return (
    <>
      <div className="main-container">
        <Heading />
        <InputAndOutput />
      </div>
    </>
  );
}

export default App;
