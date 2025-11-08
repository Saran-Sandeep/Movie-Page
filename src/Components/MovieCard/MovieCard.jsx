import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="card">
      <div className="card__poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
          className="card__img"
        />
        <div className="card__overlay">
          <button className="card__btn btn">&hearts;</button>
        </div>
      </div>
      <div className="card__info">
        <h3>{props.movie.title}</h3>
        <p>{props.movie.release_date}</p>
      </div>
    </div>
  );
}
