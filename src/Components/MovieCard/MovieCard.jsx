import "./MovieCard.css";
import { useMovieContext } from "../../contexts/useMovieContext";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const onFavoriteClicked = (e) => {
    e.preventDefault();

    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";

  return (
    <div className="card">
      <div className="card__poster">
        <img
          src={posterSrc}
          alt={movie.title}
          className={`card__img ${
            !movie.poster_path ? "card__img--fallback" : ""
          }`}
          loading="lazy"
        />
        <div className="card__overlay">
          <button
            className={`card__fav-btn ${
              favorite ? "card__fav-btn--active" : ""
            }`}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
            onClick={onFavoriteClicked}
            aria-pressed={favorite}
          >
            <span className="card__fav-icon" aria-hidden="true">
              &hearts;
            </span>
          </button>
        </div>
      </div>

      <div className="card__info">
        <h3 className="card__title">{movie.title}</h3>
        <span className="card__year">{releaseYear}</span>
      </div>
    </div>
  );
}
