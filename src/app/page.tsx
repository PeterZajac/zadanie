import MainScreen from "@/components/MainScreen";

const fetchFruits = async () => {
  const res = await fetch("https://www.fruityvice.com/api/fruit/all");
  return res.json();
};

const Home = async () => {
  const fruits = await fetchFruits();
  //state
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <MainScreen data={fruits} />
    </div>
  );
};

export default Home;
