import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";
import { getPopularMovies, searchMovies } from "../../services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to load popular movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="card__container">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
