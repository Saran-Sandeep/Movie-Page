import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MovieCard from "./Components/MovieCard/MovieCard";

function App() {
  let movieData = [];

  for (let i = 1; i <= 101; i++) {
    movieData.push({
      id: i,
      title: "Movie " + i,
      url: "#",
    });
  }

  return (
    <>
      <NavBar />
      <div className="card__container">
        {movieData.map((movie) => (
          <MovieCard data={movie} id={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
