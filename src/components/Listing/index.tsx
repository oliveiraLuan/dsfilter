import "./styles.css";
import { ProductDTO } from "../../models/ProductDTO";

export type Props = {
  products: ProductDTO[]
}

export default function Listing({products} : Props) {

  return (
    <>
      <section>
        <div className="products-container">
            {
              products.map((product) => (
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
