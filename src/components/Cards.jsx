import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Cards = () => {

  const { id } = useParams();
  const cards = useSelector((state) => state.cards.list);
  const card = cards.find((c) => c.id === id);

  return (
    <div>
      {card && (
        <p>{card.name}</p>
      )}
      <p></p>
      <p></p>
    </div> 
  )
}

export default Cards