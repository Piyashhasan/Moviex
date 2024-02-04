import { BiSearchAlt } from "react-icons/bi";
import logo from "../../../assets/images/movix-logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 items-center gap-5 py-2 bg-black">
        {/* --- logo side start --- */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* --- logo side end --- */}

        {/* --- nav link side start --- */}
        <div>
          <ul className="flex items-center justify-end gap-12 text-white">
            <li>
              <Link to="#">Movies</Link>
            </li>
            <li>
              <Link to="#">Tv Shows</Link>
            </li>
            <li>
              <Link to="#" className="text-2xl">
                <BiSearchAlt />
              </Link>
            </li>
          </ul>
        </div>
        {/* --- nav link side end --- */}
      </div>
    </div>
  );
};

export default NavBar;
