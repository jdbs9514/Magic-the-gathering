import { useEffect } from "react";
import { fetchApi } from "../store/slices/cards/cardslice";
import { useDispatch, useSelector } from "react-redux"

const Home = () => {

  const cards = useSelector(state => state.cards.list);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);


  return (
    <div>
      <div className="grid grid-cols-2">
        {
          cards.map(card => (
            <div key={card.id} className="w-[50%]">
              <img src={card.imageUrl} alt="card" className="w-[50%]" />
            </div>
          ))
        };
      </div>
    </div>
  );
};

export default Home;
