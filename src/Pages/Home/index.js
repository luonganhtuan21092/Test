import {addCommas} from '../../Functions';

import {Fragment, useState} from "react"
import {faCheck,faShippingFast,faExchangeAlt,faPhoneVolume,faShoppingCart,faHeart,faSyncAlt,faSearch,faStar} 
from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom"


function Title({children}){
    return(
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">{children}</span>
        </h2>
    )
}

function Crousel(){

    function Col1(){
        const [Active,setActive]= useState(0)
        const list = [
            {'data-target': '#header-carousel'},
            {'data-target': '#header-carousel'},
            {'data-target': '#header-carousel'}
        ]
        return (
            <div className="col-lg-8">
                <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {
                            list.map((item,index) => 
                            <li key={index}
                                onClick={()=>{setActive(index)}}
                                className={index == Active ? "active" :""}
                                data-target={item["data-target"]} 
                                data-slide-to={`${index+1}`}></li>
                            )
                        }
                    </ol>
                    <div className="carousel-inner" id="carousel-inner">
                        <div className={`carousel-item carousel-itemCustom position-relative ${0==Active?'active':''}`} style={{height: "430px"}}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: "cover"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:"700px"}}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`carousel-item carousel-itemCustom position-relative ${1==Active?'active':''}`} style={{height: "430px"}}>
                        <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: "cover"}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>

                        <div className={`carousel-item carousel-itemCustom position-relative ${2==Active?'active':''}`}style={{height: "430px"}}>
                        <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: "cover"}} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        )
    }
    function Col2(){
        return (
            <div className="col-lg-4">
                <div className="product-offer mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="img/offer-1.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
                <div className="product-offer mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="img/offer-2.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        )
    }
  return(  
    <div className="container-fluid mb-3">
        <div className="row px-xl-5">
            <Col1/>
            <Col2/>
        </div>
    </div>
  )
}
function ContainerFluid(){
    return(
        <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faCheck} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faShippingFast} className="text-primary customd2 m-0 mr-2"/>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faExchangeAlt} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faPhoneVolume} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

function Category(){

    const Products=[
        {img:"cat-1.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-2.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-3.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-4.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-4.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-3.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-2.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-1.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-3.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-4.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-1.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
        {img:"cat-2.jpg",name:"Category Name",qualytyProuct:"100 Products",url:""},
    ]
    function Col({img,name, qualytyProuct,url}){
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link className="text-decoration-none" to={url}>
                <div className="cat-item d-flex align-items-center mb-4">
                    <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                        <img className="img-fluid" src={`img/${img}`} alt=""/>
                    </div>
                    <div className="flex-fill pl-3">
                        <h6>{name}</h6>
                        <small className="text-body">{qualytyProuct}</small>
                    </div>
                </div>
            </Link>
        </div>
        )
    }

    return (
        <div className="container-fluid pt-5">
            <Title>Categories</Title>
            <div className="row px-xl-5 pb-3">
                {Products.map((item,index)=> 
                    <Col
                        key={index}
                        img={item.img}
                        name={item.name}
                        qualytyProuct={item.qualytyProuct}
                        url={item.url}
                    />)
                }
            </div>
        </div>
    )
}

function Product({title,aip}){

    const dataProduct = [
        {name:'Product Name Goes Here',img:"product-1.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-2.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-3.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-4.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-5.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-6.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-7.jpg",url:"", price:500000,priceDel:250000},
        {name:'Product Name Goes Here',img:"product-8.jpg",url:"", price:500000,priceDel:250000},
        
    ]
    function Col({img,name,url,price,priceDel}) {
        
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={`img/${img}`} alt=""/>
                    <div className="product-action">
                        <Link className="btn btn-outline-dark btn-square" to=""><FontAwesomeIcon icon={faShoppingCart}/></Link>
                        <Link className="btn btn-outline-dark btn-square" to=""><FontAwesomeIcon icon={faHeart}/></Link>
                        <Link className="btn btn-outline-dark btn-square" to=""><FontAwesomeIcon icon={faSyncAlt}/></Link>
                        <Link className="btn btn-outline-dark btn-square" to=""><FontAwesomeIcon icon={faSearch}/></Link>
                    </div>
                </div>
                <div className="text-center py-4">
                    <Link className="h6 text-decoration-none text-truncate" to={url}>{name}</Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{addCommas(price)}đ</h5><h6 className="text-muted ml-2"><del>{addCommas(priceDel)}đ</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
                        <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
                        <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
                        <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
                        <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="container-fluid pt-5 pb-3">
            <Title>{title}</Title>
            <div className="row px-xl-5">
            {dataProduct.map((item,index)=>
                <Col
                    key={index}
                    name={item.name}
                    img ={item.img}
                    url={item.url}
                    price={item.price}
                    priceDel={item.priceDel}
                />
            )
            }
            </div>
        </div>
    )
}

function Offer(){

    function Col1(){
        return(
            <div className="col-md-6">
            <div className="product-offer mb-30" style={{height: "300px"}}>
                <img className="img-fluid" src="img/offer-1.jpg" alt=""/>
                <div className="offer-text">
                    <h6 className="text-white text-uppercase">Save 20%</h6>
                    <h3 className="text-white mb-3">Special Offer</h3>
                    <a href="#" className="btn btn-primary">Shop Now</a>
                </div>
            </div>
        </div>
        )
    }
    function Col2(){
        return(
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{height: "300px"}}>
                    <img className="img-fluid" src="img/offer-2.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container-fluid pt-5 pb-3">
            <div className="row px-xl-5">
                <Col1/>
                <Col2/>
            </div>
        </div>
    )
}
function Vendor(){
    return(
        <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel vendor-carousel">
                    <div className="bg-light p-4">
                        <img src="img/vendor-1.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-2.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-3.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-4.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-5.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-6.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-7.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-8.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
function Home() {
    
    return (
       <Fragment>
            <Crousel/>
            <ContainerFluid/>
            <Category/>
            <Product title="Featured Products" />
            <Offer/>
            <Product title="Product Name Goes Here" />
            {/* <Vendor/> */}
       </Fragment>
    );
}

export default Home; 