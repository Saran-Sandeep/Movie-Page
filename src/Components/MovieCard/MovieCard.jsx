import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="card">
      {/* <img className="card__image" src={props.data.url} alt={props.data.title} /> */}
      <h3 className="card__title">{props.data.title}</h3>
    </div>
  );
}
