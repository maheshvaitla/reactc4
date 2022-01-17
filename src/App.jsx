
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './Components/Admin';
import { Dasboard } from './Components/Dasboard';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/dashbaord" element={<Dasboard />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
