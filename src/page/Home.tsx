import Tasks from "../drag-and-drop/Tasks";
import TestMemo from "../memo/TestMemo";
import TripTracker from "../test/TripTracker";
import Listings from "../transform-data/Listings";
import FileExplorer from "./FileExplorer";

export default function Home() {
  return (
    <div>
        <h1>We all Test Our activities here </h1>
        <TripTracker/>
        <FileExplorer/>
        <Tasks/>
        <Listings/>
        <TestMemo/>
    </div>
  )
}
