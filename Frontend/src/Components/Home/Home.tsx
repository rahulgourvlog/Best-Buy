import React from 'react'
import './home.css'
import {  Link } from "react-router-dom";
import { Sliders } from './Slider';

export const Home = () => {
  return (
    <div className='main'>
      <div className='start'>
        <div>
            <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt61985f76d0fbe78d/62a28c0743918857196ec434/wi-20220610-feature-fg-friends-and-family-eng-xs.png?width=50p&quality=80&auto=webp" alt="" />
            <h1> The mobile sale you've been <br /> waiting for is here.</h1>
            <p>Check out the hottest deals on cell phones and plans. Sale ends <br /> Thursday, June 16.</p>
            <button className='explr'>Explore Deals</button>
        </div>
        <div>
            <div  className='fst'>
                <div className='dad'>
                    <h2>Make Dad's day.</h2>
                    <p>Get great deals on gifts Dad is sure to <br /> love.</p>
                    <button className='cmn'>Shop Now</button>
                </div>
                <div className='tab'><img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt14897663e5408ea9/6284276ce2c4985428880a02/global-20220520-feature-fg-fathersday-s.png?width=50p&quality=80&auto=webp" alt=""/></div>
            </div>
            <div className='sec'>
                <div className='top'>
                    <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt81e13afbb7b1eb42/6000de84e4028c63a64da10a/heb-20210115-feature-top-deals-fg-xs.png?width=50p&quality=80&auto=webp" alt="" style={{height:"100px"}}/>
                    <p>Find the best offers from our latest <br /> sales, all in one place.</p>
                    <button className='cmn'>Shop Now</button>
                </div>
                <div style={{padding:"28px"}}>
                    <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt44552786da671881/6261bf59fd9afd4b1fe30aad/computing-20220408-feature-fg-apple-mothers-day-xs.png?width=50p&quality=80&auto=webp" alt="" style={{height:"120px"}}/>
                    <h4>Dad will love an Apple gift.</h4>
                    <button className='shop'>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
      <div className='secnd'>
        <img src="https://tpc.googlesyndication.com/simgad/16419482776478403002?" alt="" /><br />
        <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0ca797fe4791c852/61d8c3637c5435387a0c0115/heb-20220107-bby-valueprops-en-m.jpg?width=50p&quality=80&auto=webp" alt="" style={{height:"65px", marginTop:"45px"}}/>
      </div>
      <h1>Our hottest offers</h1>
      <div className='thrd'>
       <div> 
        <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15318/15318935.jpg" alt="" style={{marginLeft:"40px"}}/> 
        <h4>Save up to $300 on select ultra-HD TVs.</h4>
        <p>Plus, enjoy more deals on select home audio and home theatre accessories.</p>
        <Link to={"/shopdeals"}><h4>Shop Deals  </h4></Link>
       </div>
       <div>
        <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt360dc53ebf77defc/627449b48c90c334d0d41486/computing-20220506-offer-computers-and-accessories-4col-m.jpg?width=1800&quality=80&auto=webp" alt="" />
        <h4>Save big on computers and accessories for work and play.</h4>
        <Link to={"/shopdeals"}><h4>Shop Now  </h4></Link>
       </div>
       <div>
        <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltce40af050d6f9a59/602db6bb2bcd81160ce91b54/heb-20210219-offer-bestbuy-outlet-m-eng.jpg?width=1800&quality=80&auto=webp" alt="" />
        <h3>Explore Best Buy Outlet.</h3>
        <p>Find incredible deals on open box and Geek Squad Certified Open Box items, and more.</p>
        <Link to={"/shopdeals"}><h4>Shop Now  </h4></Link>
        </div>
       <div><img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc441b801db73c6d0/6295337e737ad40f5e664078/smart-home-20210319-offer-smart-home-event-en-m.jpg?width=1800&quality=80&auto=webp" alt=""/>
       <h4>Save up to 29% on select smart home tech.</h4>
       <p>Find great deals on smart home products designed to make your life easier, safer, and more comfortable.</p>
       <Link to={"/shopdeals"}><h4>Shop Deals  </h4></Link>
       </div>
      </div>
      <h1>Shop this season's essentials</h1>
      <div className='four'>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd60e3261c1f642b7/5d0033bc6a96af7017dfe74d/furniture-icon-alloutdoor.jpg?width=250&quality=80&auto=webp" alt="" />
        <Link to={"/outs"}><h5>Outdoor Living</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2a6ba8186f5c2fc8/5effa6b7b52fb75925ee404c/ac-sbc-icon.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/cool"}><h5>Cooling and Air Quality</h5></Link> 
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt395270f5843e37fe/626aaf3976b17f2f94786952/sportsandrec-evergreen-category-icon-shop-by-category.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/sports"}><h5>Sports and Recreations</h5></Link>
          </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltff769e2ada93c2db/5fa9e4b44e40cf53001f5252/di-evergreen-category-icon-cameras-drones.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/camera"}><h5>Cameras, Camcorders, and Drones</h5></Link>
          </div>
        <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/134/13497/13497557.jpg" alt="" />
          <Link to={"/car"}><h5>Car Tech</h5></Link>
          </div>
        <div><img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2b069a38bfbed6f6/60db8b26a1ff3159b5938622/luggage-evergreen-category-icon-luggage-bags.jpg?width=250&quality=80&auto=webp" alt="" />
        <Link to={"/travel"}><h5>Travel and Luggage</h5></Link>
        </div>
      </div>
      <h1>Shop by category</h1>
      <div className='five'>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt100fc1a0ee5fdd12/5d23bb6f8d27ea11c3822271/ht-20190712-homepage-ht-shopby.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/TVs"}><h5>TVs, Home Theatre, and Accessories</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltad02379eb78e9028/5e28a49463d1b6503160ee40/computing-evergreen-category-icon-laptops.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/computers"}><h5>Computers, Tablets, and Accessories</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7682f947ff1c0cd3/5f9749ff67a7c35492602290/smart-home-icon.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/smart"}><h5>Smart Home</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9450d10d80be158b/6192ea614eed0e4a24dca596/homepage-shopbycategory-pa-on-sale.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/headphone"}><h5>Headphones and Portable Speakers</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt819b5f45dd06be17/6025c7884b8030688c37d8bd/bbym-20210212-icon-cellphone-accessories.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"phone"}><h5>Cell Phones and Accessories</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltebba6ba1bd154354/5ee2c83e0f079e4334fd6c74/majorapps-icon.jpg?width=250&quality=80&auto=webp" alt="" />
         <Link to={"/Appliances"}><h5>Major Appliances</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2f9307f50e7b9ad0/5f7b8d08879de80eb41b07e9/mixers-icon.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/kitchen"}><h5>Small Kitchen Appliances</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt781fd15a5b1c8dbb/611bd84725695f14a34d829a/13817625_5.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/Video Games"}><h5>Video Games, Consoles, and Accessories</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4cddcbaa288413ec/5f5a7640c0eb1d4aeabe8f7f/14882490.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/Wearable"}><h5>Wearable Technology</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77b27294b5c07f31/5d9f83ee0767ca0e800b06fa/computing-evergreen-icon-pc-gaming.jpg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/gaming"}><h5>PC Gaming</h5></Link>
        </div>
        <div>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/146/14679/14679772.jpg" alt="" />
          <Link to={"/fitness"}><h5>Health and Fitness</h5></Link>
        </div>
        <div>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2705e457feb84d61/62059060214fe9266428d3e4/vacuums-sbc-icon-12370687.jpeg?width=250&quality=80&auto=webp" alt="" />
          <Link to={"/vacuum"}><h5>Vacuums</h5></Link>
        </div>
      </div>
      <div className='secnd'>
      <img src="https://tpc.googlesyndication.com/simgad/1112128883670628544?" alt="" />
      </div>

       <Sliders/> 

      <div className='six'>
        <div style={{paddingLeft:"90px"}}>
          <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1ca9ebcd9783f1c9/620aeba6f011e923b061d514/global-20220220-bar-happyhour-m-en.png?width=50p&quality=80&auto=webp" alt="" />
        </div>
        <div style={{textAlign:"left"}}>
          <h2>Our next great deal? Help us choose.</h2>
          <p>Vote for our next deals on Instagram now.</p>
          <button className='cmn'>Learn More</button>
        </div>
      </div>
      <div className="seven">
        <div className='one'>
            <h1>Mario Strikers: Battle League.</h1>
            <p>Meet your friends on the field in this soccer-style game with no rules.</p>
            <button className='shop'>Shop Now</button>
        </div>
        <div>
          <img src="https://pbs.twimg.com/media/FR-yhZwXEAAfVN7?format=jpg&name=900x900" alt="" style={{height:"250px",width:"620px"}}/>
        </div>
      </div>
    </div>
  )
}

