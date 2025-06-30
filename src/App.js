import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyNavBar from "./components/MyNavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import TalkWithMe from "./components/TalkWithMe"; // New import

function App() {
  return (
    <Router>
      <MyNavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <SocialLinks />
            </>
          }
        />

        <Route path="/talk-with-me" element={<TalkWithMe />} />
      </Routes>
    </Router>
  );
}

export default App;
