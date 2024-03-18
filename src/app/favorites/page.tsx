import Table from "@/components/myFavoritesTable/MyFavoritesTable";

const Favorites = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1>MY</h1>
      <h1 className="text-4xl font-bold ">FAVORITES</h1>
      <Table />
    </div>
  );
};

export default Favorites;
