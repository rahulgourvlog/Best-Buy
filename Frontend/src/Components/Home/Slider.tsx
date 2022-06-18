import React, { useState } from 'react';
import './home.css';
import styles from"./home.module.css"
//import Carousel from "react-elastic-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderdata from "./db.json";

//import data from "./data.json";
import { FaBookmark } from 'react-icons/fa';


export const Sliders = () => {
  const [data,Setdata]=useState(sliderdata.data)
  const [data1,Setdata1]=useState(sliderdata.data2)
  const [data2,Setdata2]=useState(sliderdata.data3)
console.log(sliderdata.data)
  

 

  

let settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    indicators:true,
    slidesToScroll: 2
}



  return (
     <div>
        
<div className={styles.slidermain1}>
<div className={styles.slider1}>
<h1 style={{color:"#fff240"}}>Smart Home Sale</h1>
        <h1>Brilliant savings on <br /> smart home tech.</h1>
        <p>Find great deals on products designed to make <br /> your life easier, safer, and more comfortable.</p>
        <button className='cmn'>Shop Deals</button>
</div>
<div className={styles.slider2}>
    <Slider {...settings} >
    {
       data.map((el) => {
          return(
          <>
                     <div className={styles.products1}>
                     <img src={el.img} alt="notfound"height = "200px" width={"200px"}style={{marginLeft:"20px"}} />
                     <p className={styles.p1}>{el.p1}</p>
                  <span>{el.p2}</span>
                 
                   <p className={styles.p3} style={{marginBottom:"5px", fontSize: "12px"}}>{el.p3}</p>
                  <p className={styles.p4} style={{marginBottom:"-10px"}}>{el.p4}</p>
                     <p className={styles.p5} style={{marginBottom:"10px", fontSize: "12px"}}>{el.p5}</p>
                      <h4  style={{marginBottom:"-10px",color:"#cc2b45"}}>{el.h3}</h4>
                     </div>     
          </>
                )
          })
    } 
    </Slider>
    </div> 
</div>



<div className={styles.slidermain1}>
<div className={styles.slider1}>
<h1>Marketplace <br /> Picks </h1>
        <h1>Save on the latest tech  <br />and more.</h1>
        <p>Discover this week’s top Marketplace deals from <br /> our trusted sellers.</p>
        <button className='cmn'>Shop More Deals</button>
</div>
<div className={styles.slider2}>
    <Slider {...settings}>
    {
      data1.map((el) => {
          return(
          <>
                     <div className={styles.products1}>
                     <img src={el.img} alt="notfound"height = "200px" width={"200px"}style={{marginLeft:"20px"}} />
                     <p className={styles.p1}>{el.p1}</p>
                  <span>{el.p2}</span>
                 
                   <p className={styles.p3} style={{marginBottom:"5px", fontSize: "12px"}}>{el.p3}</p>
                  <p className={styles.p4} style={{marginBottom:"-10px"}}>{el.p4}</p>
                     <p className={styles.p5} style={{marginBottom:"-20px", fontSize: "12px"}}>{el.p5}</p>
                      <h4  style={{marginBottom:"-10px",color:"#cc2b45"}}>{el.h3}</h4>
                      <div style={{marginTop:"10px"}}>
                      <svg style={{width:"12px",height:"12px"}}className="blue_2GwtG icon_q2ZYd marketplaceLogo_14OwV" viewBox="0 0 64.39 68.36"><path d="M54.26,16.87a2.32,2.32,0,0,1-2.32-2.31,9.94,9.94,0,1,0-19.87,0,2.31,2.31,0,1,1-4.62,0,14.56,14.56,0,0,1,29.12,0A2.32,2.32,0,0,1,54.26,16.87Z" transform="translate(-3.58)"></path><path d="M13.17,16.87a2.31,2.31,0,0,1-2.31-2.31A14.57,14.57,0,0,1,25.41,0a14.79,14.79,0,0,1,2.74.26A2.32,2.32,0,0,1,30,3,2.33,2.33,0,0,1,27.28,4.8a9.72,9.72,0,0,0-1.87-.18,10,10,0,0,0-9.93,9.94A2.32,2.32,0,0,1,13.17,16.87Z" transform="translate(-3.58)"></path><path d="M18.72,19.61a3.48,3.48,0,0,0-3.48,3.47l-.07,36.3c0,1.49.34,3.29,2.59,6s3.16,3,5.59,3H64.43a3.47,3.47,0,0,0,3.47-3.47L68,23a3.46,3.46,0,0,0-3.46-3.47Z" transform="translate(-3.58)"></path><path d="M6.66,19.56a3.3,3.3,0,0,0-3,3.53L3.58,67.52c0,.93.49,1.11,1.1.4L7.36,64.8a8.93,8.93,0,0,0,2.29-6.2V21.25A1.69,1.69,0,0,0,8,19.56Z" transform="translate(-3.58)"></path></svg>
                      <span className="marketplaceName_3FG8H">Marketplace seller</span>
                      </div>
                     </div>     
          </>
                )
          })
    } 
    </Slider>
    </div> 
</div>



<div className={styles.slidermain1grey} >
<div className={styles.slider1}>
<img  style={{width:'350px',height:"90px"}}alt="" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb758fd90e2973508/617b44daa2b4ac1067d75d22/global-lg-evergreen-featureskulist-logo-2.png"/>
<h3 style={{
    fontSize: "32px",
    lineHeight: "40px",color:'black'}}>Latest and Greatest Tech.</h3>
<p style={{color:'black'}}>Check out the latest product launches and get inspired by the tech of tomorrow.</p>
     
        <button  style={{backgroundColor:'#0046be',color:'white'}} className='cmn'>Explore Latest and Greatest Tech</button>
</div>
<div className={styles.slider2} >
    <Slider {...settings}>
    {
      data2.map((el) => {
          return(
          <>
                     <div className={styles.products1} style={{boxShadow:"0.2px 0.2px 0.4px 1px #d4d4d4 "}}>
                     <img src={el.img} alt="notfound"height = "200px" width={"200px"}style={{marginLeft:"20px"}} />
                     <p className={styles.p1}>{el.p1}</p>
                  <span>{el.p2}</span>
                 
                   <p className={styles.p3} style={{marginBottom:"5px", fontSize: "12px"}}>{el.p3}</p>
                  <p className={styles.p4} style={{marginBottom:"-10px"}}>{el.p4}</p>
                     <p className={styles.p5} style={{marginBottom:"-20px", fontSize: "12px"}}>{el.p5}</p>
                      <h4  style={{marginBottom:"-10px"}}>{el.h3}</h4>
                      
                     </div>     
          </>
                )
          })
    } 
    </Slider>
    </div> 
</div>











    
        </div>


  )
}
