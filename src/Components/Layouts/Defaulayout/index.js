import Header from "../components/Header";
import Sliderbar from "../components/Sliderbar";
import Footer from "../components/Footer";

import { useState ,useEffect } from "react";
import { faAngleDoubleUp}  from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function BtnScrollTop (){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        function handleScroll() {
            const scrollTop = document.documentElement.scrollTop;
            setIsVisible(scrollTop > 200);
          }
      
          window.addEventListener('scroll', handleScroll);
       
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    
    const buttonStyle = {
        display: isVisible ? 'block' : 'none',
    };
 return(
    <div 
        onClick={handleClick}
        className="btn_cuon" 
        style={buttonStyle}>
        <FontAwesomeIcon  icon={faAngleDoubleUp}
    />
    </div>  
 )
}
function DefaultLayout({children}) {
    
    return ( <div>
        <Header/>
        <Sliderbar/>
        {children}
        <Footer/>
        <BtnScrollTop/>
    </div>);
}

export default DefaultLayout;