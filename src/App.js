import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.tsx";

function App() {
  // should look like
  // nav element with navbar
  // section elements with section inside a main element
  // footer element at the end
  //figures for images
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
