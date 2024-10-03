import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyNavBar from "./components/MyNavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <MyNavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <SocialLinks />
    </div>
  );
}

export default App;
