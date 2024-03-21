import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import agua from "../assets/logos/agua.png";
import arbol from "../assets/logos/arbol.png";
import fuego from "../assets/logos/fuego.png";
import skull from "../assets/logos/skull.png";
import sol from "../assets/logos/sol.png";
import { Link } from "react-router-dom";

const Cards = () => {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards.list);
  const card = cards.find((c) => c.id === id);

  return (
    <div className="bg-gradient-to-r from-zinc-900">
      <span className="text-white ml-6  cursor-pointer">
        <Link to="/">
          <i className="fa-solid fa-arrow-left mt-6" />
        </Link>
      </span>
      {card && (
        <div className="h-full">
          <div className="flex justify-center">
            <img src={card.imageUrl} alt="image" className="mt-12" />
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <img src={agua} alt="mana" className="w-[5.6%] h-[5%]" />
            <img src={arbol} alt="mana" className="w-[5%] h-[5%]" />
            <img src={fuego} alt="mana" className="w-[5%] h-[5%]" />
            <img src={skull} alt="mana" className="w-[5%] h-[5%]" />
            <img src={sol} alt="mana" className="w-[5%] h-[5%]" />
          </div>
          <div className=" flex-col text-center">
            <p className="text-blue-900 text-xl mt-6">
              <strong className="text-red-900">Name: </strong>
              {card.name}
            </p>
            <p className="text-blue-900 text-xl">
              <strong className="text-red-900">Mana cost: </strong>
              {card.manaCost}
            </p>
            <p className="text-blue-900 text-xl">
              <strong className="text-red-900">Type: </strong>
              {card.type}
            </p>
            <p className="text-blue-900 text-xl">
              <strong className="text-red-900">Artist: </strong>
              {card.artist}
            </p>
            {card.power && card.toughness && (
              <p className="text-blue-90 text-xl">
                <strong className="text-red-900">Stats: </strong>
                {card.power}/{card.toughness}
              </p>
            )}
            <hr className="w-[50%] m-auto mt-6 " />
            <div className="mx-6">
              <p className="px-6 text-l font-bold text-black mt-4">
                {card.text}
              </p>
              <p className="text-black">{card.flavor}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
