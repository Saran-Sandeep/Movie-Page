import "./Favorites.css";
import { useMovieContext } from "../../contexts/useMovieContext";
import MovieCard from "../../Components/MovieCard/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  const hasFavorites = favorites && favorites.length > 0;

  return (
    <section className="favorites container">
      <h2 className="favorites__title">Your Favorites</h2>

      {hasFavorites ? (
        <div className="card__container">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites__empty">
          <div className="favorites__icon">🍿</div>
          <h3>No Favorite Movies Yet</h3>
          <p>Start adding movies to your favorites and they’ll appear here!</p>
        </div>
      )}
    </section>
  );
}
