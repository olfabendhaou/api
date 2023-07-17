
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componnents/NavBar/NaBar'
function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUS/>} />
          <Route path="/Admin" element={<Admininterface/>} />
          <Route path="/Users" element={<Users/>} />
      </Routes>
      
    </div>
  );
}

export default App;
