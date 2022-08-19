import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import NavBar from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from "./components/home/home";

import './App.css';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/clients'} element={''} />
          <Route path={'/contact'} element={''} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
