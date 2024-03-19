import { useEffect } from "react";
import { fetchApi } from "../store/slices/cards/cardslice";
import { useDispatch, useSelector } from "react-redux"

const Home = () => {

  const cards = useSelector(state => state.cards.cards);
  console.log(cards);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div>
      <div>
        {/* {
          cards.map(card => (
            <div key={card.multiverseid}>
              <img src={card.imageUrl} alt="card" />
            </div>
          ))
        }; */}
      </div>
    </div>
  );
};

export default Home;
