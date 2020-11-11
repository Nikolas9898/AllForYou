import React, { useState } from "react";
import ProductListContainerStyle from "./ProductListContainerStyle.module.css";
function ProductListContainer(props) {
  const [products, setProducts] = useState([
    {
      name: "asdasd",
      image: "fsdfsd",
      description: "adasd",
      price: 123234,
    },
    {
      name: "asdasd",
      image: "fsdfsd",
      description: "adasd",
      price: 123234,
    },
    {
      name: "asdasd",
      image: "fsdfsd",
      description: "adasd",
      price: 123234,
    },
  ]);

  return (
    <div>
      <div>
        {products.map((product) => {
          console.log(product);
        })}
      </div>
    </div>
  );
}

export default ProductListContainer;
