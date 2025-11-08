import "./MovieCard.css";

export default function MovieCard({ movie }) {
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
          <button className="card__fav-btn" title="Add to favorites">
            &hearts;
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
