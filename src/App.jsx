import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="layout">
          <Navbar />
            <Routes>
              <Route path="/" element={  <div className="main"><Home /></div>} />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



