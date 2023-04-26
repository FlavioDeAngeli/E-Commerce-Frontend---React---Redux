import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Cart from "../../components/Cart";

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
