import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";
import { getPopularMovies, searchMovies } from "../../services/api";
import { useEffect, useState } from "react";

// --- Helper Hook ---
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
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        name="movieQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
        className="searchbar__input"
      />
      <button type="submit" className="searchbar__btn btn btn-primary">
        Search
      </button>
    </form>
  );
}

// --- Main Component ---
export default function Home() {
  const { movies, error, loading, searchForMovies } = useMovies();

  if (loading)
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );

  if (error) return <div className="error">{error}</div>;

  return (
    <main className="home container fade-in">
      <h2 className="visually-hidden">Movie List</h2>
      <SearchBar onSearch={searchForMovies} />
      {movies.length === 0 ? (
        <p className="no-results">No movies found. Try another search.</p>
      ) : (
        <div className="card__container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </main>
  );
}
