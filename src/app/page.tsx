import { container } from "./home.css";
import PlaceList from "./_components/PlaceList";

const Home = () => {
  return (
    <main className={container}>
      <PlaceList />
    </main>
  );
};

export default Home;
