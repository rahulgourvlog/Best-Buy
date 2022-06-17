import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>Computers & Tablets</option>  
          </Typography>
          
          <Typography>
            <option>Appliances</option>
          </Typography>

          <Typography>
            <option>Home Living</option>
          </Typography>

          <Typography>
            <option>Audio</option>
          </Typography>

          <Typography>
            <option>Wearable Technology</option>
          </Typography>

          <Typography>
            <option>Smart Home</option>
          </Typography>

          <Typography>
            <option>Cameras & Camcorders</option>
          </Typography>

          <Typography>
            <option>Video Games</option>
          </Typography>

          <Typography>
            <option>TV & Home Theatre</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <option >Get it Shipped</option>
          </Typography>

          <Typography>
           <option >Pick Up at Nearby Stores</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Current Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <option >On Sale</option>
          </Typography>

          <Typography>
           <option >Top Deals</option>
          </Typography>

          <Typography>
           <option >On Clearance</option>
          </Typography>

          <Typography>
           <option >Best Buy Exclusive</option>
          </Typography>

          <Typography>
           <option >Refurbished</option>
          </Typography>

          <Typography>
           <option >Open Box</option>
          </Typography>
          
          <Typography>
           <option >Online Only</option>
          </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>A</option>
          </Typography>
          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>A</option>
          </Typography>
          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>A</option>
          </Typography>
          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sellers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>A</option>
          </Typography>
          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Customer Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <option>A</option>
          </Typography>
          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>

          <Typography>
            <option>A</option>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}