import Resenia from "./Resenia";

const ReseniaList = ({ listaResenias }) => {
  if (!listaResenias || listaResenias.length === 0) {
    return <p>No hay Reseñas</p>;
  } else {
    return (
      <div className="feedback-list">
        {listaResenias.map((resenia) => (
          <Resenia key={resenia.id} resenia={resenia} />
        ))}
      </div>
    );
  }
};

export default ReseniaList;
