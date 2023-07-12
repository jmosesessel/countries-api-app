import "./App.css";
import Header from "./components/Header";
import {  Routes, Route, Link } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";


function App() {
  return (
    <>
      <div className="bg-very-light-gray-light-mode-bg w-full flex flex-col font-Nunito text-sm">
        <Header />
        <Routes>

            <Route exact path="/" element={<Homepage />} />
        
            <Route path="/country-details" element={<CountryDetails />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
