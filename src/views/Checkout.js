import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Cart from "../components/Cart";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Cart />
      <Footer />
    </div>
  );
}

export default Home;
