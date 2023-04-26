import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Product from "../../components/Product";

function ProductInfo() {
  return (
    <div className="ProductInfo">
      <Navigation />
      <Product />
      <Footer />
    </div>
  );
}

export default ProductInfo;
