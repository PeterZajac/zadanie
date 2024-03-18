import Heading from "@/components/PageHeading";
import PageWrapper from "@/components/Global/PageWrapper";
import Table from "@/components/myFavoritesTable/MyFavoritesTable";

const Favorites = () => {
  return (
    <PageWrapper>
      <Heading firstText="MY" secondText="FAVORITES" />
      <Table />
    </PageWrapper>
  );
};

export default Favorites;
