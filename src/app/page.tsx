import SearchBar from "@/components/SearchBar";

const fetchData = async () => {
  const response = await fetch("https://www.fruityvice.com/api/fruit/all");
  const data = await response.json();
  console.log(data);
};
fetchData();

export default function Home({ fruits }: { fruits: any[] }) {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      {/* sem pojde obrázok citrónu */}
      <h1 className="text-4xl font-bold mb-4">SEARCH</h1>
      <SearchBar fruits={fruits} />
    </div>
  );
}
