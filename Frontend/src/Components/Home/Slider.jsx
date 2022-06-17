import React from 'react';
import './home.css';
import Carousel from "react-elastic-carousel"

const breakPoints=[
  {width:1, itemsToShow:1},
  {width:550, itemsToShow:2},
  {width:768, itemsToShow:3},
  {width:1200, itemsToShow:4}
]

export const Slider = () => {
  return (
     <div>
         <div className='mainn'>
        <div className="big">
        <h1 style={{color:"#fff240"}}>Smart Home Sale</h1>
        <h1>Brilliant savings on <br /> smart home tech.</h1>
        <p>Find great deals on products designed to make <br /> your life easier, safer, and more comfortable.</p>
        <button className='cmn'>Shop Deals</button>
        </div>
        <div className='sml'>
         <Carousel breakPoints={breakPoints}>
         <div >
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/122/12222/12222651.jpg" alt="" style={{width:"80px", height:"80px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div >
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15748/15748026.jpg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15237/15237362.jpg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14931/14931829.jpg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Blink Outdoor Wire-Free 1080p IP Security Camera</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15299/15299145.jpg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99 </h3>
         </div>
          </Carousel>
        </div>
        </div>
        <div className="another">
          <h2>Top Selling Products</h2>
          <div >
            <Carousel breakPoints={breakPoints}>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15265/15265629.jpg" alt="" />
                <p>Dyson V8 Animal Cordless stick <br /> Vaccum- Nickel</p>
                <p>⭐⭐⭐⭐ (4008 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$399.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15667/15667567.jpg" alt="" />
                <p>JBL Vibe 200TWS In-Ear Sound <br /> Isolating Truly Wireless <br /> Headphones - Black</p>
                <p>⭐⭐⭐⭐⭐ (448 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$599.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/129/12946/12946745.jpg" alt="" />
                <p>Apple AirPods Pro In-Ear Noise <br /> Cancelling Truly Wireless <br /> Headphones with MagSafe Charging Case - White</p>
                <p>⭐⭐⭐⭐⭐ (4008 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$399.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/150/15069/15069285.jpg" alt="" />
                <p>Google nest cam wired <br /> outdoor security camera <br />with foodlight</p>
                <p>⭐⭐⭐⭐ (408 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$799.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15733/15733039.jpg" alt="" />
                <p>Apple iPad V8 Animal Cordless with wifi <br /> Vaccum- Nickel</p>
                <p>⭐⭐⭐⭐⭐(4008 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$999.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/117/11794/11794997.jpg" alt="" />
                <p>portable Air conditioner <br /> -8000 BTU white/grey</p>
                <p>⭐⭐⭐⭐ (5308 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$1529.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/125/12556/12556720.jpg" alt="" />
                <p>Google nest cam wired <br /> outdoor security camera <br />with foodlight</p>
                <p>⭐⭐⭐⭐ (408 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$799.99</h3>
              </div>
              <div>
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/103/10347/10347500.jpg" alt="" />
                <p>Google nest cam wired <br /> outdoor security camera <br />with foodlight</p>
                <p>⭐⭐⭐⭐ (408 reviews)</p>
                <h3 style={{color:"#cc2b45"}}>$799.99</h3>
              </div>
            </Carousel>
          </div>
        </div>

        <div className='mainn' style={{backgroundColor:"#0148c4"}}>
        <div className="big">
        <h2>Marketplace <br /> Picks </h2>
        <h1>Save on the latest tech  <br />and more.</h1>
        <p>Discover this week’s top Marketplace deals from <br /> our trusted sellers.</p>
        <button className='cmn'>Shop More Deals</button>
        </div>
        <div className='sml'>
         <Carousel breakPoints={breakPoints}>
         <div >
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/133/13371/13371675.jpeg" alt="" style={{width:"80px", height:"80px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div >
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15341/15341670.jpg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15341/15341213.jpeg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16032/16032641.png" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Blink Outdoor Wire-Free 1080p IP Security Camera</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99</h3>
         </div>
         <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15644/15644475.jpeg" alt="" style={{width:"100px", height:"100px"}}/>
          <p style={{fontSize:"13px"}}>Apple HomePod mini-space open box</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1234 views)</p>
          <p style={{color:"#cc2b45"}}>SAVE $112</p>
          <h3 style={{color:"#cc2b45"}}>$214.99 </h3>
         </div>
          </Carousel>
        </div>
     </div>

      
        </div>
  )
}
