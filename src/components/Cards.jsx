import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Cards = () => {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards.list);
  const card = cards.find((c) => c.id === id);

  return (
    <div className="bg-gradient-to-r from-zinc-900">
      {card && (
        <div className="h-screen">
          <div className="flex justify-center">
            <img src={card.imageUrl} alt="image" className="mt-12" />
          </div>
          <div className=" flex-col text-center mt-16">
            <p className="text-blue-900 text-2xl">
              <strong className="text-red-900">Name: </strong>
              {card.name}
            </p>
            <p className="text-blue-900 text-2xl">
              <strong className="text-red-900">Type: </strong>
              {card.type}
            </p>
            <p className="text-blue-900 text-2xl">
              <strong className="text-red-900">Artist: </strong>
              {card.artist}
            </p>
            <p className="text-blue-90 text-xl">
              <strong className="text-red-900">Stats: </strong>
              {card.power}/{card.toughness}
            </p>
            <hr className="w-[50%] m-auto mt-6 " />
            <div className="mx-6 mt-12">
              <p className="px-6 text-xl font-bold text-black">{card.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
