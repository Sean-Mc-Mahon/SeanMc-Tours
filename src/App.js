//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Work from "./components/Work";
import MyTours from "./pages/MyTours";
import MyMusic from "./pages/MyMusic";
import West from "./pages/West";
import North from "./pages/North";
import East from "./pages/East";
import Cliffs from "./pages/Cliffs";
import Burren from "./pages/Burren";
import Kilmac from "./pages/Kilmac";
import Galway from "./pages/Galway";
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
          <Route path="/work" exact element={<Work />}></Route>
          <Route path="/about" exact element={<AboutUs />}></Route>
          <Route path="/music" exact element={<MyMusic />}></Route>
          <Route path="/west" exact element={<West />}></Route>
          <Route path="/north" exact element={<North />}></Route>
          <Route path="/east" exact element={<East />}></Route>
          <Route path="/cliffs" exact element={<Cliffs />}></Route>
          <Route path="/burren" exact element={<Burren />}></Route>
          <Route path="/kilmac" exact element={<Kilmac />}></Route>
          <Route path="/gal" exact element={<Galway />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
