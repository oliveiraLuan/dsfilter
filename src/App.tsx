import { useState } from "react";
import "./App.css";
import ListingBody from "./components/ListingBody";
import Header from "./components/header";
import { ContextCountProducts } from "./context-products";


function App() {
  const [contextProductsCount, setContextProductsCount] = useState<number>(0);

  return (
    <>
      <ContextCountProducts.Provider value={{ contextProductsCount, setContextProductsCount }}>
        <Header />
        <ListingBody />
      </ContextCountProducts.Provider>
    </>
  );
}

export default App;
