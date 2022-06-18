import React from "react";
import "./Sas.css";

function Explore() {
  return (
    <div>
      <h4 className="exploreoutlet">Explore our Outlet</h4>
      <div className="beast">
        <div className="">
          <div className="mama"></div>
          <p className="clearence">Clearance products.</p>
          <p className="boxdescription">
            Score spectacular deals on tons of clearance products. But you'll
            need to hurry, because once they're gone, they're gone for good.
          </p>
          <p className="linkshop">Shop Clearence Products </p>
        </div>
        <div>
          <div className="mama2"></div>
          <p className="clearence">Geek Squad Certified open box products.</p>
          <p className="boxdescription">
            Save on mint condition products that have been inspected and
            certified by Geek Squad agents, plus include warranties and all
            accessories.
          </p>
          <p className="linkshop">Shop certified open box products</p>
        </div>

        <div>
          <div className="mama3"></div>
          <p className="clearence">Open Box products.</p>
          <p className="boxdescription">
            Fully tested and verified to be working perfectly, these open box
            products come standard with massive discounts.
          </p>
          <p className="linkshop">Shop open box products </p>
        </div>
        <div>
          <div className="mama4"></div>
          <p className="clearence">Refurbished products.</p>
          <p className="boxdescription">
            Enjoy unbelievable savings on tens of thousands of refurbished
            products from our carefully selected and qualified Marketplace
            partners.
          </p>
          <p className="linkshop">Shop refurbished products </p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
