import NavBar from "../../Reusable_components/NavBar/NavBar";

const Header = () => {
  return (
    <div className="">
      {/* --- navbar section start --- */}
      <div className="bg-yellow-300">
        <NavBar />
      </div>
      {/* --- navbar section end --- */}

      {/* --- Banner section start --- */}
      <div className="container py-[8%] bg-black text-center">
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
