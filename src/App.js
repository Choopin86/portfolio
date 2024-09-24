import About from "./components/About";
import Home from "./components/Home";
import MyNavBar from "./components/MyNavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <MyNavBar />
      <Home />
      <About />

      <SocialLinks />
    </div>
  );
}

export default App;
