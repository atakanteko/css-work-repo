import './App.css';
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import TimelineVersion from "./pages/TimelineVersion";
import MovieCard from "./pages/MovieCard";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timeline-version-2" element={<TimelineVersion />} />
            <Route path="/movie-card" element={<MovieCard />} />
        </Routes>
    </div>
  );
}

export default App;
