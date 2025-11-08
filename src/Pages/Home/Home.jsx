import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";

export default function Home() {
  let movieData = [];

  for (let i = 1; i <= 101; i++) {
    movieData.push({
      id: i,
      title: "Movie " + i,
      url: "#",
    });
  }

  return (
    <div className="home">
      <div className="card__container">
        {movieData.map((movie) => (
          <MovieCard data={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
}
