import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Project/Form";
import Card from "./Project/Card";
import Detail from "./Project/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;