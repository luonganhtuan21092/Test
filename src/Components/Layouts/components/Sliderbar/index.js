import {faBars,faAngleRight,faAngleDown,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link,useLocation} from 'react-router-dom'
import clsx from "clsx";

import { useState } from 'react';
function Sliderbar() {
    
    function Col1(){
        const [IsDisPlay, setDisPlay] = useState(false)
        
        return(
            <div className="col-lg-3 d-none d-lg-block" onClick={()=>{setDisPlay(IsDisPlay=>!IsDisPlay)}}>
                <div className={`btn d-flex align-items-center justify-content-between bg-primary w-100 `}
                data-toggle="collapse" 
                href="#navbar-vertical" 
                style={{height: "65px", padding: "0 30px"}}
                >
                    <h6 className="text-dark m-0"><FontAwesomeIcon icon={faBars} className="mr-2"/>Categories</h6>
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            
                <nav onClick={(e)=>{e.stopPropagation()}}
                 className={` ${IsDisPlay ? "custom" :"" } collapse  customNav position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light `} id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "999"}}>
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown dropright">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <FontAwesomeIcon icon={faAngleRight} className="float-right mt-1"/></Link>
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <Link to="" className="dropdown-item">Men's Dresses</Link>
                                <Link to=""  className="dropdown-item">Women's Dresses</Link>
                                <Link to="" className="dropdown-item">Baby's Dresses</Link>
                            </div>
                        </div>
                        <Link to="" className="nav-item nav-link">Shirts</Link>
                        <Link to="" className="nav-item nav-link">Jeans</Link>
                        <Link to="" className="nav-item nav-link">Swimwear</Link>
                        <Link to="" className="nav-item nav-link">Sleepwear</Link>
                        <Link to="" className="nav-item nav-link">Sportswear</Link>
                        <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                        <Link to="" className="nav-item nav-link">Blazers</Link>
                        <Link to="" className="nav-item nav-link">Jackets</Link>
                        <Link to="" className="nav-item nav-link">Shoes</Link>
                    </div>
                </nav>
                
                
            </div>
        )
    }
    function Col2(){
        const [ishover, setIsHover]= useState(false)
        const {pathname} = useLocation()
        const Path ={
            Home:"/",
            Shop:"/Shop",
            ShopDetails:"/ShopDetails",
            Contact:"/Contact",
            Cart:"/Cart",
            CheckOut:"/CheckOut",
        }
        return(
            <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <a href="" className="text-decoration-none d-block d-lg-none">
                    <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                    <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to={Path.Home} className={clsx('nav-item nav-link',{'active':Path.Home== pathname})}>Home</Link>
                        <Link to={Path.Shop} className={clsx('nav-item nav-link',{'active':Path.Shop== pathname})}>Shop</Link>
                        <Link to={Path.ShopDetails} className={clsx('nav-item nav-link',{'active':Path.ShopDetails == pathname})}>Shop Detail</Link>
                        <div 
                        className="nav-item dropdown"
                        style={{cursor: 'pointer'}} 
                        onMouseEnter={()=>{setIsHover(true)}}
                        onMouseLeave={()=>{setIsHover(false)}}
                        >
                            <div className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <FontAwesomeIcon icon={faAngleDown} className="mt-1"/></div>
                            <div className={`dropdown-menu bg-primary rounded-0 border-0 m-0 ${ishover ? 'show' : ''} `}>
                                <Link to={Path.Cart} className={clsx("dropdown-item", {'active': Path.Cart == pathname})}>Shopping Cart</Link>
                                <Link to={Path.CheckOut} className={clsx("dropdown-item", {'active': Path.CheckOut == pathname})}>Checkout</Link>
                            </div>
                        </div>
                        <Link to={Path.Contact} className={clsx("nav-item nav-link",{'active': Path.Contact == pathname}) }>Contact</Link>
                    </div>
                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <Link to="" className="btn px-0">
                            <FontAwesomeIcon icon={faHeart} className="text-primary"/>
                            <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}></span>
                        </Link>
                        <Link to="" className="btn px-0 ml-3">
                            
                            <FontAwesomeIcon icon={faShoppingCart} className="text-primary"/>
                            <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>20</span>
                        </Link>
                    </div>
                </div>
            </nav>
            
            </div>
        )
    }
    return ( 
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <Col1/>
           <Col2/>
        </div>
    </div>);
}

export default Sliderbar;