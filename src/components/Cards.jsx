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
      <span className="text-white ml-6 cursor-pointer ">
        <Link className="animate-pulse" to="/">
          <i className="fa-solid fa-arrow-left mt-6 lg:text-2xl" />
        </Link>
      </span>
      {card && (
        <div className="h-full md:h-screen">
          <div className="flex justify-center gap-6 mt-6">
            <img
              src={agua}
              alt="mana"
              className="w-[5.6%] h-[5%] animate-bounce"
            />
            <img
              src={arbol}
              alt="mana"
              className="w-[5%] h-[5%] animate-bounce"
            />
            <img
              src={fuego}
              alt="mana"
              className="w-[5%] h-[5%] animate-bounce"
            />
            <img
              src={skull}
              alt="mana"
              className="w-[5%] h-[5%] animate-bounce"
            />
            <img
              src={sol}
              alt="mana"
              className="w-[5%] h-[5%]  animate-bounce"
            />
          </div>
          <div className="lg:flex justify-center lg:gap-10 lg:mt-16">
            <div className="flex justify-center lg:w-[80%]">
              <img src={card.imageUrl} alt="image" className="mt-12" />
            </div>
            <div className="lg:mt-8 lg:w-[50%]">
              <div className="sm:flex-col text-center lg:text-left">
                <div className="lg:w-[50%]">
                  <p className="text-blue-900 mt-6">
                    <strong className="text-red-900">Name: </strong>
                    {card.name}
                  </p>
                  <p className="text-blue-900">
                    <strong className="text-red-900">Mana cost: </strong>
                    {card.manaCost}
                  </p>
                  <p className="text-blue-900">
                    <strong className="text-red-900">Type: </strong>
                    {card.type}
                  </p>
                  <p className="text-blue-900">
                    <strong className="text-red-900">Artist: </strong>
                    {card.artist}
                  </p>
                </div>
                {card.power && card.toughness && (
                  <div className="lg:w-[50%]">
                    <p className="text-blue-900">
                      <strong className="text-red-900">Stats: </strong>
                      {card.power}/{card.toughness}
                    </p>
                  </div>
                )}
                <div className="lg:w-[50%] flex-column align-center">
                  <p className="text-l font-bold text-black mt-4">
                    {card.text}
                  </p>
                  <p className="text-black">{card.flavor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
