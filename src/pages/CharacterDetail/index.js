import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  clearCharacterDetail,
  fetchCharacterDetail,
} from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
function CharacterDetail() {
  const { character_id } = useParams();
  const { character } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (character.status === "idle") {
      dispatch(fetchCharacterDetail(character_id));
    }

    return () => {
      dispatch(clearCharacterDetail());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character_id, dispatch]);

  console.log(character);

  if ((character.status === "idle") | (character.status === "loading")) {
    return <Loading />;
  }

  const { image, name, status, species, location, origin } = character?.detail;

  return (
    <>
      <div className="p-8 border overflow-auto  m-40 rounded-xl shadow-2xl hover:scale-110 duration-300">
        <div className="inline-block float-start ">
          <img
            className="rounded-xl mr-5"
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>

        <div className="space-y-8 p-2">
          <div>
            <h3 className="text-4xl font-semibold">{name}</h3>
            <span
              className={`text-2xl ${status === "Alive" ? "alive" : "dead"}`}
            >
              {status} - {species}
            </span>
          </div>
          <div>
            <p className="text-xl text-slate-400">Last known location:</p>
            <p className="text-2xl">{location.name}</p>
          </div>
          <div>
            <p className="text-xl text-slate-400">Origin</p>
            <p className="text-2xl">{origin.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
