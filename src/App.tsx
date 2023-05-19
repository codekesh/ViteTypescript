import First from "./first";
import { Routes, Route} from "react-router-dom";
import Second from "./Second";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
