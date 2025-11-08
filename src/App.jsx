import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
