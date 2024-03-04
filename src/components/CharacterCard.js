import { Link } from "react-router-dom";

function CharacterCard({ origin, location, status, species, image, id, name }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row shadow-md sm:h-52 rounded-lg overflow-hidden space-x-4">
        <img src={image} alt={name} className="hover:scale-105 duration-150" />
        <div className="space-y-2 p-2">
          <div>
            <Link to={`/character-detail/${id}`}>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </Link>
            <span className={`${status === "Alive" ? "alive" : "dead"}`}>
              {status} - {species}
            </span>
          </div>
          <div>
            <p className="text-slate-400">Last known location:</p>
            <p>{location.name}</p>
          </div>
          <div>
            <p className="text-slate-400">Origin</p>
            <p>{origin.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
