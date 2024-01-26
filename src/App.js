import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashbord from "./Components/UserComponents/UserDashbord/UserDashbord";
import AdminDashbord from "./Components/AdminComponents/AdminDashbord/AdminDashbord";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< UserDashbord />} />
          <Route path="/admin" element={< AdminDashbord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
