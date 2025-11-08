import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";
import { getPopularMovies, searchMovies } from "../../services/api";
import { useEffect, useState } from "react";

// --- Helper Hooks ---
function useMovies() {
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
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load popular movies.");
    } finally {
      setLoading(false);
    }
  };

  const searchForMovies = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search for movies.");
    } finally {
      setLoading(false);
    }
  };

  return { movies, error, loading, searchForMovies };
}

// --- Subcomponent ---
function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movieQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
}

// --- Main Component ---
export default function Home() {
  const { movies, error, loading, searchForMovies } = useMovies();

  if (loading) return <div className="loading"></div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <SearchBar onSearch={searchForMovies} />
      <div className="card__container">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
