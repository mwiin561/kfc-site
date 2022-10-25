import Banner from "./components/Banner";
import BannerContent from "./components/BannerContent";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <BannerContent />
      <Carousel />
          {/* <Packages /> */}
    </div>
  );
}

export default App;
