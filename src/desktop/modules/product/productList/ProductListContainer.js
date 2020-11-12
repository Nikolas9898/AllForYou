import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductListContainerStyle from "./ProductListContainerStyle.module.css";
function ProductListContainer(props) {
  const [products, setProducts] = useState([
    {
      name: "Смарт часовник ESEED W8 METAL ⌚",
      image: "https://www.technomani.bg/wp-content/uploads/2020/04/ESEED-black-and-silver.jpg",
      description: "adasd",
      price: "35.50",
      slug:'smartWatch'
    },
    {
      name: "Смарт ",
      image: "https://www.technomani.bg/wp-content/uploads/2020/04/ESEED-black-and-silver.jpg",
      description: "adasd",
      price: "35.50",
    },
    {
      name: "Смарт часовник ESEED W8 METAL ⌚",
      image: "https://www.technomani.bg/wp-content/uploads/2020/04/ESEED-black-and-silver.jpg",
      description: "adasd",
      price: "35.50",
    },
    {
      name: "Смарт часовник ESEED W8 METAL ⌚",
      image: "https://www.technomani.bg/wp-content/uploads/2020/04/ESEED-black-and-silver.jpg",
      description: "adasd",
      price: "35.50",
    },
    {
      name: "Смарт часовник ESEED W8 METAL ⌚",
      image: "https://www.technomani.bg/wp-content/uploads/2020/04/ESEED-black-and-silver.jpg",
      description: "adasd",
      price: "35.50",
    },
   
  ]);

  return (
    <div className={ProductListContainerStyle.container}>

      <div className={ProductListContainerStyle.content}>
        {products.map((product) => {
          return(
             <div className={ProductListContainerStyle.card}>
                 <Link to={`/product/${product.slug}`} className={ProductListContainerStyle.card_container}>
                    <div>
                        <img className={ProductListContainerStyle.image} src={product.image} />
                    </div>
                      <div className={ProductListContainerStyle.description}>
                          <div className={ProductListContainerStyle.name}>
                            {product.name}
                          </div>
                          <div className={ProductListContainerStyle.price}> 
                              {product.price}{" лв."}
                          </div>
                        </div>
                 </Link>
                 
               
               </div>
          );
       
        })}
      </div>

    </div>
  );
}

export default ProductListContainer;
