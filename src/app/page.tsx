import LemonPicture from "@/components/LemonPicture";
import SearchingPage from "@/components/SearchingPage";

const Home = async () => {
  return (
    <>
      <LemonPicture />
      <h1 className="text-4xl font-bold custom-margin ">SEARCH</h1>
      <p className="mb-6 custom-margin">FRUIT DATABSE</p>
      <SearchingPage />
    </>
  );
};

export default Home;
