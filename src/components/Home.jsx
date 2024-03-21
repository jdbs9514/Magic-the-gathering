import { useEffect } from "react";
import { fetchApi } from "../store/slices/cards/cardslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = useSelector((state) => state.cards.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-zinc-900">
      <div className="grid grid-cols-4 ml-8">
        {cards.map(
          (card) =>
            // con esta condicion solo se mostrar las imagenes que si lleguen a renderizar
            card.imageUrl && (
              <div
                key={card.id}
                className="w-[90%] flex justify-center m-1 mt-4"
              >
                <Link to={`/cards/${card.id}`}>
                  <img
                    src={card.imageUrl}
                    alt="card"
                    className="w-[80%] cursor-pointer"
                  />
                </Link>
              </div>
            )
        )}
        ;
      </div>
      
    </div>
  );
};

export default Home;
