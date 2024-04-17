import NewArrival from "../../components/NewArrival/NewArrival";
import BrowseTheRange from "../../components/BrowseTheRange/BrowseTheRange";
import FuniroFurniture from "../../components/FuniroFurniture/FuniroFurniture";
import RoomDesigns from "../../components/RoomDesigns/RoomDesigns";

function Home() {

  return (
    <div className="App">
      <NewArrival/>
      <BrowseTheRange/>
      <RoomDesigns/>
      <FuniroFurniture/>
    </div>
  );
}

export default Home;
