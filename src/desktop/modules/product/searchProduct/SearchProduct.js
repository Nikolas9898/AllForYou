import React, { useEffect, useState } from "react";
import ProductListContainerStyle from "../productList/ProductListContainerStyle.module.css";
import ProductCard from "../productList/components/productCard/ProductCard";
import Loader from "../productList/components/loader/Loader";
import axios from "axios";

function SearchProduct({ title },props) {
  const [products, setProducts] = useState([]);
  const [loader] = useState([{}, {}, {}, {}]);
  const [noData, setNoData] = useState(false);
  let[search,setSearch]=useState("");
    if(search!==title){
      setSearch(title);
      setProducts([]);
      setNoData(false);

    }
  
  console.log(title===title)
  useEffect(() => {
    axios
      .get(
        `https://allforyouapinodejs.herokuapp.com/api/product/byTitle/${title}`
      )
      .then((products) => {
       
        if(products.data.length===0){
          setNoData(true);
        }
        setProducts(products.data);
        
      });
  }, [title]);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <div className={ProductListContainerStyle.container}>
          {
            noData? <div className={ProductListContainerStyle.content}>

             <p>Няма намерени продукти</p>
            </div>:
             <div className={ProductListContainerStyle.content}>
              {loader.map((product, index) => {
                return <Loader index={index} key={index} />;
              })}
             </div>
          }
        </div>
      ) : (
        <div className={ProductListContainerStyle.container}>
          <div className={ProductListContainerStyle.content}>
            {products.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default SearchProduct;
