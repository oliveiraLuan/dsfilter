import "./styles.css";
import * as productService from "../../services/product-service";

export default function Listing() {
  return (
    <>
      <section>
        <div className="products-container">
            {
              productService.findByPrice(1500, 2000).map((product) => (
                  <div key={product.id} className="product">
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">{product.price}</p>
                  </div>
              ))
            }
        </div>
      </section>
    </>
  );
}
