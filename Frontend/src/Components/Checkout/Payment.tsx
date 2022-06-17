import "./Payment.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import {Link} from "react-router-dom"

const Payment = () => {

  let total = localStorage.getItem("total");

  return (
    <>
    <div className="chtitle">
        <h2>Checkout</h2>
        <p><span className="rnum">① </span>Shipping - <span className="rnum">②</span>&nbsp;Delivery - ③ Payment</p>
    </div>
    <div className="chmain">
      <div className="chaddy">
        <div className="chaddyb">
        <h3>Payment</h3>
         

        <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography><CardGiftcardRoundedIcon></CardGiftcardRoundedIcon> &nbsp;GiftCard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can apply upto 2 gift card per order.<br></br><br></br>
          Gift Card number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIN<br></br>
            <input className="chinp1" type="text"></input>&nbsp;&nbsp;&nbsp;<input type="text" className="chinp2"></input>&nbsp;&nbsp;&nbsp;<button className="chinp21"> Apply</button>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography><CreditCardRoundedIcon></CreditCardRoundedIcon>&nbsp;Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="pcard">
            We accept the following cards.<br></br><br />
            <img src="https://www.bestbuy.ca/ch/static/media/visa.ecc7562f.svg" alt="" />&nbsp;<img src="https://www.bestbuy.ca/ch/static/media/mastercard.f46d0b1d.svg" alt="" />&nbsp;<img src="https://www.bestbuy.ca/ch/static/media/amex.deb7736a.svg" alt="" /><br /><br />
            Card Number <br></br>
            <input type="text" className="chinp1"></input><br /><br />
            Expiry Month &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expiry Year <br />
            <input type="text" className="chinp2"></input>&nbsp;&nbsp;<input type="text" className="chinp4"></input><br /><br />
            CVV <br />
            <input type="text" className="chinp2"></input>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography><img src="https://www.bestbuy.ca/ch/static/media/paypallogo.04b82a13.svg"/></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Select "Pay with PayPal" to enter your payment details on the PayPal site.<br></br><br />
          <div className="ppaypal"><img src="https://www.bestbuy.ca/ch/static/media/paypal-white.31d24521.svg"/></div>
          </Typography>
        </AccordionDetails>
      </Accordion>


        </div>
      </div>
      <div className="chtotal">
        Order Summary<br></br><br></br>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Product Subtotal</p>	<p style={{"fontWeight":"100"}}>{total}</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Order Discounts</p>	<p style={{"fontWeight":"100"}}>-$400.00</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Estimated Shipping</p>	<p style={{"fontWeight":"100"}}>Free</p></h5>
        <h5 className="chweight"><p style={{"fontWeight":"100"}}>Estimated Taxes</p>	<p style={{"fontWeight":"100"}}>$64.87</p></h5> 	
        <hr />
        <h5 className="chweight"><p style={{"fontWeight":"bold"}}>Estimated Total</p>	<p style={{"fontWeight":"bold"}}>$563.87</p></h5> 
        <Link to="/otp"><button className="cartb1">Continue</button><br></br></Link>
        <h4 style={{"paddingLeft":"30px"}}> <LockOutlinedIcon></LockOutlinedIcon> Security & Privacy</h4>
        <p style={{"lineHeight":"19px","paddingLeft":"30px"}}>Every transaction on BestBuy.ca is secure. Any personal information you give us will be handled according to our Privacy Policy.</p>
      </div>
    </div>
    </>
  )
}

export default Payment