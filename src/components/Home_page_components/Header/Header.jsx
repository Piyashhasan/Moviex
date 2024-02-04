import { useEffect, useState } from "react";
import { useGetUpcomingMoviesQuery } from "../../../services/api/apiSlice";
import NavBar from "../../Reusable_components/NavBar/NavBar";
import { useSelector } from "react-redux";

const Header = () => {
  const { backdrop } = useSelector((store) => store.movie.url);
  const { data } = useGetUpcomingMoviesQuery();
  const [background, setBackground] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20);
    const imageUrl = data?.results[randomNumber]?.backdrop_path;
    const backgroundImage = backdrop + imageUrl;
    setBackground(backgroundImage);
  }, [data, backdrop]);

  return (
    <div
      className="bg-cover bg-no-repeat h-full"
      style={{
        backgroundImage: `url(${background})`,
        opacity: "0.8",
      }}
    >
      {/* --- navbar section start --- */}
      <div>
        <NavBar />
      </div>
      {/* --- navbar section end --- */}

      {/* --- Banner section start --- */}
      <div className="container py-[10%] text-center">
        <h1 className="text-8xl font-semibold text-white">Welcome.</h1>
        <p className="text-xl text-white my-3">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="flex items-center justify-center my-10">
          <input
            className="w-[40%] py-3 px-5 rounded-l-full"
            type="text"
            placeholder="Search for a movie or tv show..."
          />
          <button className="bg-gradient-to-r from-[#FBB03B] to-[#D4145A] py-3 px-10 text-white font-semibold rounded-r-full">
            Search
          </button>
        </div>
      </div>
      {/* --- Banner section end --- */}
    </div>
  );
};

export default Header;
