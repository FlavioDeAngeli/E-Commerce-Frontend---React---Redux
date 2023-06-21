import { useSelector } from "react-redux";
import Navigation from "../layout/navigation";
import NavigationMobile from "../layout/navigationMobile";
import Footer from "../layout/footer";
import Cart from "../../components/Cart";

function Home() {
  const isMobile = useSelector((state) => state.ui.isMobile);
  return (
    <div className="Home">
      {!isMobile ? <Navigation /> : <NavigationMobile />}
      <Cart />
      <Footer />
    </div>
  );
}

export default Home;
