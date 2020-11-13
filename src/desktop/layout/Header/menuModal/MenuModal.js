import React from "react";
import MenuModalStyl from './MenuModalStyl.module.css';


function MenuModal({isMenuOpen}) {
    const categories=["Спорт","Игри","Козметика","Джаджи"]
  return (
       <div >
        {
            isMenuOpen===true?
                    <div className={MenuModalStyl.container}>
                        <div className={MenuModalStyl.content}> 
                        <h1>Категории</h1>
                        {
                             categories.map(category=>{
                                 return(
                                     <div className={MenuModalStyl.category}>
                                        {category}
                                     </div>
                                 )
                             })
                        }
                    
                        </div>
                    </div>:
                    null
        
        }
      </div>
  );
}

export default MenuModal;
