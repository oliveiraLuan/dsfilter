import { useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/ProductDTO";

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [minimumValue, setMinimumValue] = useState(0);
  const [maximumValue, setMaximumValue] = useState(Number.MAX_VALUE);

  useEffect(() => {
    const produtos = productService.findByPrice(minimumValue, maximumValue);
    setProducts(produtos);
  }, [minimumValue, maximumValue]);

  function handleFilter(minValue: number, maxValue: number) {
    setMinimumValue(minValue || 0);
    setMaximumValue(maxValue || Number.MAX_VALUE);
  }

  return (
    <>
      <main>
        <div className="main-container">
          <Filter onFilter={handleFilter}/>
          <Listing products={products} />
        </div>
      </main>
    </>
  );
}
