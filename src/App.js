import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Section } from "./components/Section.tsx";

function App() {
  // should look like
  // nav element with navbar
  // section elements with section inside a main element
  // footer element at the end
  //figures for images
  return (
    <Router>
      <Routes>
        <Route
          index
          element={<Section mainColor="#9BB8CD" secondaryColor="white" />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
