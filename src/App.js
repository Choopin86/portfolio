import About from "./components/About";
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

      <SocialLinks />
    </div>
  );
}

export default App;
