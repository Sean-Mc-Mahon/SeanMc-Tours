//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Food from "./pages/Food";
import Reviews from "./pages/Reviews";
import MyTours from "./pages/MyTours";
import MyMusic from "./pages/MyMusic";
import West from "./pages/West";
import North from "./pages/North";
import East from "./pages/East";
import Cliffs from "./pages/Cliffs";
import Burren from "./pages/Burren";
import Kilmac from "./pages/Kilmac";
import Galway from "./pages/Galway";
import Dun from "./pages/Dun";
import Cwy from "./pages/Cwy";
import Dark from "./pages/Dark";
import Bel from "./pages/Bel";
import Glen from "./pages/Glen";
import Gap from "./pages/Gap";
import Farm from "./pages/Farm";
import Kil from "./pages/Kil";
import Nav from "./components/nav";
import Footer from "./components/footer";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  //adjust scroll behaviour
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {/* location and key needed for AnimatePresence */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<MyTours />}></Route>
          <Route path="/about" exact element={<AboutUs />}></Route>
          <Route path="/music" exact element={<MyMusic />}></Route>
          <Route path="/food" exact element={<Food />}></Route>
          <Route path="/reviews" exact element={<Reviews />}></Route>
          <Route path="/west" exact element={<West />}></Route>
          <Route path="/north" exact element={<North />}></Route>
          <Route path="/east" exact element={<East />}></Route>
          <Route path="/cliffs" exact element={<Cliffs />}></Route>
          <Route path="/burren" exact element={<Burren />}></Route>
          <Route path="/kilmac" exact element={<Kilmac />}></Route>
          <Route path="/gal" exact element={<Galway />}></Route>
          <Route path="/dun" exact element={<Dun />}></Route>
          <Route path="/cwy" exact element={<Cwy />}></Route>
          <Route path="/dark" exact element={<Dark />}></Route>
          <Route path="/bel" exact element={<Bel />}></Route>
          <Route path="/glen" exact element={<Glen />}></Route>
          <Route path="/gap" exact element={<Gap />}></Route>
          <Route path="/farm" exact element={<Farm />}></Route>
          <Route path="/kil" exact element={<Kil />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
