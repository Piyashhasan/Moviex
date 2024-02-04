import Header from "../../components/Home_page_components/Header/Header";


const Home = () => {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <>
      {/* --- header section start --- */}
      <Header />
      {/* --- header section end --- */}
    </>
  );
};

export default Home;
