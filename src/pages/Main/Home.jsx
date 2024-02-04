import { useDispatch } from "react-redux";
import Header from "../../components/Home_page_components/Header/Header";
import { useGetConfigurationQuery } from "../../services/api/apiSlice";
import { useEffect } from "react";
import { getUrlConfiguration } from "../../features/movies/movieSlice";

const Home = () => {
  const { data } = useGetConfigurationQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    const url = {
      backdrop: data?.images?.secure_base_url + "original",
      profile: data?.images?.secure_base_url + "original",
      poster: data?.images?.secure_base_url + "original",
    };
    dispatch(getUrlConfiguration(url));
  }, [data, dispatch]);

  return (
    <>
      {/* --- header section start --- */}
      <Header />
      {/* --- header section end --- */}
    </>
  );
};

export default Home;
