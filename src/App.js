import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/home/home";
import { Login } from "./components/Pages/login/login";
import { GlobalStyle } from "./styles/global"

export default function App() {
  return (
      <Router>
        <Routes>
            <Route  path="/home" element={<Home/>}/>
            <Route  path="/" element={<Login/>}/>
        </Routes>  
        <GlobalStyle/>
    </Router>
  );
}