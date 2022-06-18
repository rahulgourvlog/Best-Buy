import React, { useEffect, useState } from "react";
import "./Tdpage.css";
import axios from "axios";
import Accordian from "./Accordian";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navofout from "./Navofout";

interface Product {
  _id: string;
  title: string;
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  stock: number;
  images: string[];
  protection: boolean;
  rating: number;
  brand: string;
  category: string;
}

const Tdpage = () => {
  const [data, setData] = useState<Product[]>([]);
  const navigate = useNavigate();

  const products = async () => {
    const { data } = await axios.get<Product[]>(
      "https://best-buy-web-clone.herokuapp.com/best"
    );
    setData(data);
  };

  // const handleFilter=(e:any)=>{

  //     if(e.target.value==="htl")
  //     {
  //         console.log(e.target.value)

  //         data.sort((a,b)=>{
  //             return b.price-a.price
  //         })
  //         console.log(data)
  //         setData([...data]);

  //     }
  //   else if(e.target.value==="lth")
  //     {
  //         const htl=data.sort((a,b)=>{
  //             return a.price-b.price
  //         })
  //         console.log(htl)
  //         setData([...data]);
  //     }
  //     else{
  //         const rating=data.sort((a,b)=>{
  //             return b.rating-a.rating;
  //         })
  //         setData([...data])
  //     }
  // }
  function SortD(val: number) {
    let buy = data.sort((a: any, b: any) => {
      if (val == 1) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setData([...data]);
  }

  useEffect(() => {
    products();
  }, []);

  return (
    <div className="container">
      <h2>Top Deals</h2>
      <div className="banner">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt927ef2113bc4d318/61d4bdefe5a70e7d5276d21f/global-topdeals-20220107-title-logo-m-en.png?width=50p&quality=80&auto=webp"
          alt=""
        />
      </div>

      <div className="infoimg">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0ca797fe4791c852/61d8c3637c5435387a0c0115/heb-20220107-bby-valueprops-en-m.jpg?width=50p&quality=80&auto=webp"
          alt=""
        />
      </div>
      <h3>Featured top deals</h3>
      <div className="featured">
        <div>
          <img
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt61985f76d0fbe78d/62a28c0743918857196ec434/wi-20220610-feature-fg-friends-and-family-eng-xs.png?width=40p&quality=80&auto=webp"
            alt=""
          />
          <h3>The mobile sale you've been waiting for is here.</h3>
          <p>
            Check out the hottest deals on cell phones and plans. Sale ends
            Thursday, June 16.
          </p>
        </div>
        <div>
          <img
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte4ff70308c69b79a/6298eaae285a180f5793d5a8/sportsandrec-20220603-offer-top-deals-m.jpg?width=270&quality=80&auto=webp"
            alt=""
          />
          <h3>Save up to $500 on select electric bikes.</h3>
          <p>Plus, get more deals on electric scooters and hoverboards.</p>
        </div>
        <div>
          <img
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77319da770bb58c9/62a0dd5358931557ed9f746f/ht-20220610-offer-smart-light-m.jpg?width=270&quality=80&auto=webp"
            alt=""
          />
          <h3>Save 25% when you buy 2 or more Philips Hue lights.</h3>
          <p>
            Create the perfect ambiance for any occasion with great deals on
            smart lights you can control with your phone.
          </p>
        </div>
        <div>
          <img
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt16065d84167eafe7/629e3fc9c040564c458549a1/ma-20220610-offer-td-4col-m-evergreen.jpg?width=270&quality=80&auto=webp"
            alt=""
          />
          <h3>
            Save up to $1,000 with the purchase of 2 or more major kitchen
            appliances*.
          </h3>
        </div>
      </div>
      <h1>All Top Deals</h1>
      <div className="deals">
        <div className="left">
          <Accordian />
        </div>
        <div className="rightmain">
          {/* <div className='filter'>
                  <select  onChange={handleFilter}>
                    <option value="lth">Price Low-High</option>
                     <option value="htl">Price High-Low</option>
                      <option value="hr">Highest Rated</option>
                  </select>
                </div> */}
          <Navofout sortd={SortD} />

          <div className="right">
            {data &&
              data.map((e) => {
                return (
                  <Link
                    to={`/ProductDetailPage${e._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="mapping">
                      <img src={e.thumbnail} alt="" />
                      <p>{e.title}</p>
                      <h4>⭐⭐⭐⭐{e.rating}</h4>
                      <div className="topdeals">
                        <h6>Top Deals</h6>
                      </div>
                      <h3 className="red">${e.price}</h3>
                      {/* <p className="small">✔️ {e} to ship</p> */}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      <div className="bottom">
        <h3>Find all the top Best Buy flyer deals in one place</h3>
        <p>
          Typically, retail stores distribute flyers where customers can find
          out about all the latest deals available online and at their local
          store. That’s what our Top Deals page is—but it’s all online! Here you
          can see all the best deals on right now on everything from the latest
          cell phones to smart home devices, and make sure you get the hottest
          tech at the lowest possible price.
        </p>

        <h3>What kind of deals are added to this page?</h3>
        <p>
          The deals featured on this page are hand-picked by members of our team
          based on a number of things, including how often an item actually goes
          on sale (if you see Apple or Dyson on sale—jump on it!), popular and
          fast-moving products, and what we know our customers love.
        </p>

        <h3>How often are new deals added?</h3>
        <p>
          New deals are added every Friday. When we have a big sale going on
          like Black Friday, Black Friday Prices Now, Early Black Friday Sales,
          Friends and Family, Cyber Monday, Boxing Day/Week, Boxing Day in
          Summer, Labour Day Sales in September and more, you can be confident
          you’ll find the hottest offers here, no matter what kind of product
          you’re looking for. To ensure you never miss a deal, bookmark this
          page and check back often.
        </p>

        <h3>How long are deals around for?</h3>
        <p>
          Deals are around for a limited time, so if you see something you like,
          take advantage of the incredible prices before they’re gone. To see
          exactly when a particular offer ends, you can visit the product
          description page to find out.
        </p>

        <h3>Where can I find the Best Buy Canada flyer?</h3>
        <p>
          The Best Buy weekly flyer that was available on BestBuy.ca and
          elsewhere has shifted to an online Top Deals experience on BestBuy.ca
          to make shopping easier for our customers. Not only are we putting all
          the best deals and Best Buy sales front and centre, but the deals are
          also now directly shoppable through a simple click on our website.
        </p>
      </div>
    </div>
  );
};

export default Tdpage;
