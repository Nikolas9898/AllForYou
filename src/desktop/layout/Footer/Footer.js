import React from "react";
import FooterStyl from "./FooterStyl.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import econt from '../../../images/econt.jpg';

function Footer(props) {
    return (
         <nav className={FooterStyl.container}>
           <div className={FooterStyl.content}>
           
            <adress className={FooterStyl.connect_card}>
                <h1>
                    Свържете се с нас
                </h1>
                <div className={FooterStyl.connect_form}>
                     <FontAwesomeIcon className={FooterStyl.connect} icon={faPhone} />
                     <a className={FooterStyl.connect} href="tel:0876825221">0876825221</a>
                </div>
                 <div className={FooterStyl.connect_form}>
                     <FontAwesomeIcon className={FooterStyl.connect} icon={faEnvelope} />
                      <a className={FooterStyl.connect} href="mailto:iponwebschool@gmail.com">zaveskiponeshto@gmail.com</a>
                    
                 </div>
          </adress>


          <div className={FooterStyl.connect_card}>
               <h1>
                    Доставяме чрез
               </h1>
                    <img className={FooterStyl.logo} src={econt}/>
          </div>
        
           </div>
        </nav>
    );
  }
  
  export default Footer;