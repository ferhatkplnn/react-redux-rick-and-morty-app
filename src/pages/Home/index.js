import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCharacters,
  fetchMoreCharacters,
} from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CharacterCard from "../../components/CharacterCard";

function Home() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.characters);

  let { info, results } = items;

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (status === "idle" || status === "loading") {
    console.log("yihoho");
    return <Loading />;
  }

  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="p-8 pt-0 md:max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 ">
          {results.map(
            ({ origin, location, status, species, image, id, name }) => {
              return (
                <CharacterCard
                  key={id}
                  origin={origin}
                  location={location}
                  status={status}
                  species={species}
                  image={image}
                  id={id}
                  name={name}
                />
              );
            }
          )}
        </div>

        <div className="flex justify-center items-center mt-4">
          {info.next && (
            <button
              onClick={() => dispatch(fetchMoreCharacters(info.next))}
              className=" px-4 py-1 bg-sky-500 text-white rounded-sm shadow-xl hover:scale-110 duration-150"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {status === "pending" && <Loading />}
    </>
  );
}

export default Home;
