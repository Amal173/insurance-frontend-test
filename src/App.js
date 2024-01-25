import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import UserDashbord from "./Components/UserComponents/UserDashbord/UserDashbord";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< UserDashbord/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
