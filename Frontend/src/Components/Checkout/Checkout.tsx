import "./Checkout.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from "react-router-dom";


const Checkout = () => {

  let total = localStorage.getItem("total");

  return (
    <>
    <div className="chtitle">
        <h2>Checkout</h2>
        <p><span className="rnum">① </span>Shipping - ② Delivery - ③ Payment</p>
    </div>
    <div className="chmain">
      <div className="chaddy">
        <div className="chaddyb">
        <h3>Shipping</h3>
        <p>*indicates required information</p>
           <div className="chemail">
            <b>Contact Information</b><br></br><br></br>
            *Email address<br></br><br></br>
            <input type="text"></input><br></br>
            <p style={{"fontSize":"10px"}}>We'll send order updates to this email</p>
           </div>
           <div className="chaddress">
            <b>Shipping address</b><br></br><br></br>
            <input className="chinp3" type="text" placeholder="*First Name"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="chinp3" type="text" placeholder="*LastName"></input><br></br><br></br>
            <input className="chinp3" type="text" placeholder="*Phone Number"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="chinp3" type="text" placeholder="Land Mark"></input><br></br><br></br>
            <p style={{"fontSize":"15px"}}>We’ll only call you if there’s an issue with the order.</p><br></br>
            <input className="chinp" type="text" placeholder="*Address"></input><br></br><br></br>
            <input className="chinp1" type="text" placeholder="*City"></input>&nbsp;&nbsp;&nbsp;<input className="chinp2" type="text" placeholder="*Province"></input>&nbsp;&nbsp;<input className="chinp2" type="*text" placeholder="Postel Code"></input>
            <div className="chcan">
             We only ship to Canada.
            </div>
           </div>
        </div>
      </div>
      <div className="chtotal">
        <h3>Order Summary</h3><br></br><br></br>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Product Subtotal</p>	<p style={{"fontWeight":"100"}}>{total}</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Order Discounts</p>	<p style={{"fontWeight":"100"}}>-$400.00</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Estimated Shipping</p>	<p style={{"fontWeight":"100"}}>Free</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Estimated Taxes</p>	<p style={{"fontWeight":"100"}}>$64.87</p></h5> 	
        <hr />
        <h5 className="chweight"><p style={{"fontWeight":"bold"}}>Estimated Total</p>	<p style={{"fontWeight":"bold"}}>$563.87</p></h5> 
        <Link to="/payment"> <button className="cartb">Continue</button><br></br></Link> 
        <h4 style={{"paddingLeft":"30px"}}> <LockOutlinedIcon></LockOutlinedIcon> Security & Privacy</h4>
        <p style={{"lineHeight":"19px","paddingLeft":"30px"}}>Every transaction on BestBuy.ca is secure. Any personal information you give us will be handled according to our Privacy Policy.</p>
      </div>
    </div>
    </>
  )
}
export default Checkout