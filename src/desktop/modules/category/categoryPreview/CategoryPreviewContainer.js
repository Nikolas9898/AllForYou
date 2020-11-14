import React from "react";
import CategoryPreviewStyl from './CategoryPreviewStyl.module.css';
import { Link } from "react-router-dom";
import logo from "../../../../images/logo2.png";
import ContentLoader from 'react-content-loader'

function CategoryPreviewContainer(props) {
  const categories=[
    {title:"Козметика",products:[{title:"Игри за напреднали",},{title:"Игри за напреднали"},{title:"Игри за напреднали"}]},
    
  ]

  
  return (
    <div className={CategoryPreviewStyl.container}>
        {categories.length===1?
            <div>

{categories.map((category) => {
              return (
                <div>
                   <div className={CategoryPreviewStyl.category_title}>
                   <ContentLoader
                        speed={2}
                        width="90%"
                        height="40"
                        backgroundColor="#999494"
                      
                        foregroundColor="#ecebeb"
                        >

                      <rect x="20%" y="0" rx="10" ry="10" width="60%" height="30" />
                    </ContentLoader> 
                    </div>
                <div className={CategoryPreviewStyl.content}>
                 
                   {category.products.map((product) => {
                  return (
                    <div className={CategoryPreviewStyl.card}>
                    
                  <div >
                <ContentLoader
                  speed={2}
                  width="100%"
                  height="100%"
                  
                  backgroundColor="#999494"
                  foregroundColor="#ecebeb"
  
                >
                <rect x="0" y="0" rx="10" ry="10" width="100%" max-height="calc(100vh - 80px)" />  
                </ContentLoader>
                  </div>
                  


                  <div className={CategoryPreviewStyl.description}>
                    <div className={CategoryPreviewStyl.name}>
                      <ContentLoader
                            speed={2}
                            width="90%"
                            height="100%"
                          
                            backgroundColor="#999494"
                            foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="10" rx="10" ry="10" width="100%" height="10" /> 
                        <rect x="0" y="30" rx="10" ry="10" width="60%" height="10" /> 
                      </ContentLoader>
                    </div>
                    <div className={CategoryPreviewStyl.price}>
                      <ContentLoader
                        speed={2}
                        width="50%"
                        height="100%"
                        backgroundColor="#999494"
                        foregroundColor="#ecebeb"
                        >

                      <rect x="20%" y="30" rx="10" ry="10" width="60%" height="30%" />
                    </ContentLoader> 
                      
                     </div>
                  </div>
              
              </div>
                  
                  );
            })}
          
                 </div>
                    <div  className={CategoryPreviewStyl.category_more}>
                    <ContentLoader
                            speed={2}
                            width="20%"
                       height="20"
                            backgroundColor="#999494"
                            foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="0" rx="10" ry="10" width="100%" height="10" /> 
                       
                      </ContentLoader>
                     
                     </div>
                 </div>
              );
            })}
            </div>
            :
             <div>
               {categories.map((category) => {
              return (
                <div>
                   <div className={CategoryPreviewStyl.category_title}>
                    {category.title}
                    </div>
                <div className={CategoryPreviewStyl.content}>
                 
                   {category.products.map((product) => {
                  return (
                    <div className={CategoryPreviewStyl.card}>
                      <Link
                        to={`/product/${product.slug}`}
                        className={CategoryPreviewStyl.card_container}
                      >
                        <img
                          className={CategoryPreviewStyl.image}
                          src={logo}
                          alt="imageNotFound"
                        />

                        <div className={CategoryPreviewStyl.description}>
                          <div className={CategoryPreviewStyl.name}>
                            {product.title}
                          </div>
                          <div className={CategoryPreviewStyl.price}>
                            {product.price / 100}
                            {" лв."}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
            })}
          
                 </div>
                    <div  className={CategoryPreviewStyl.category_more}>
                      <Link to="#" className={CategoryPreviewStyl.category_more}>
                          Виж още ...
                      </Link>
                     
                     </div>
                 </div>
              );
            })}

          </div>
              
        }
    </div>
  );
}

export default CategoryPreviewContainer;
