import './App.css';
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import TimelineVersion from "./pages/TimelineVersion";
import MovieCard from "./pages/MovieCard";
import NavigationBarLikeApple from "./pages/NavigationBarLikeApple";
import Roadmap from "./pages/RoadMap";
import ImageHover from "./pages/ImageHover";


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timeline-version-2" element={<TimelineVersion />} />
            <Route path="/movie-card" element={<MovieCard />} />
            <Route path="/navigation" element={<NavigationBarLikeApple />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/image-hover" element={<ImageHover />} />
        </Routes>
    </div>
  );
}

export default App;
