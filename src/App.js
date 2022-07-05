import './App.css';
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import TimelineVersion from "./pages/TimelineVersion";
import MovieCard from "./pages/MovieCard";
import NavigationBarLikeApple from "./pages/NavigationBarLikeApple";
import Roadmap from "./pages/RoadMap";
import ImageHover from "./pages/ImageHover";
import MagicNav from "./pages/MagicNav";
import ImageHover3D from "./pages/ImageHover3D";
import ContentBox from "./pages/ContentBox";
import CocaCola from "./pages/CocaCola";
import MovieLanding from "./pages/MovieLanding";
import FitnessLandind from "./pages/FitnessLandind";
import Starbucks from "./pages/Starbucks";

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
            <Route path="/magic-navigation" element={<MagicNav />} />
            <Route path="/3d-image-hover" element={<ImageHover3D />} />
            <Route path="/content-box" element={<ContentBox />} />
            <Route path="/coca-cola" element={<CocaCola />} />
            <Route path="/movie-landing-page" element={<MovieLanding />} />
            <Route path="/fitness" element={<FitnessLandind />} />
            <Route path="/starbucks" element={<Starbucks />} />
        </Routes>
    </div>
  );
}

export default App;
