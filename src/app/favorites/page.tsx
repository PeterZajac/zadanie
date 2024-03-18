import PageWrapper from "@/components/Global/PageWrapper";
import Table from "@/components/myFavoritesTable/MyFavoritesTable";

const Favorites = () => {
  return (
    <PageWrapper>
      <h1>MY</h1>
      <h1 className="text-4xl font-bold ">FAVORITES</h1>
      <Table />
    </PageWrapper>
  );
};

export default Favorites;
