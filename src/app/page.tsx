import LemonPicture from "@/components/LemonPicture";
import SearchBar from "@/components/SearchBar";

const Home = async () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <LemonPicture />
      <h1 className="text-4xl font-bold ">SEARCH</h1>
      <p className="mb-6">FRUIT DATABSE</p>
      <SearchBar />
    </div>
  );
};

export default Home;
