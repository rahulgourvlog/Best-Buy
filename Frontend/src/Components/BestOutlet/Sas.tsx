import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "./Check";
import "./Sas.css";
// import Checkbox from "@material-ui/core/Checkbox";
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span className="spancat">Category</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="category">
              <p>
                <a href="">Computers && Tablets</a>
              </p>
              <p>Best Buy Mobile(3,409)</p>
              <p>Audio(1,158)</p>
              <p>Appliances(821)</p>
              <p>More from Best Buy Marketplace(797)</p>
              <p>TV & Home Theatre(616)</p>
              <p>Home Living(450)</p>
              <p>Video Games(431)</p>
              <p>Wearable Technology(404)</p>
              <p>Office Supplies &Ink(373)</p>
              <p>Cameras&Camecorders(300)</p>
              <p>Car Electronics and GPS</p>
              <p>Toys,Drones&Education(169)</p>
              <p>Smart Home(132)</p>
              <p>Sports &Recreation(73)</p>
              <p>Health & Fitness (62)</p>
              <p>Musical instruments&Equipment(59)</p>
              <p>Baby&Maternity(47)</p>
              <p>Travel,Luggage & Bags (47)</p>
              <p>Personal care (45)</p>
              <p>Fashion ,watches &Jewelery(26)</p>
              <p>Movies&Music(9)</p>
              <p>Beauty(4)</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Avilability</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              Get Shiped
              <input type="checkbox" />
            </div>
            <div className="Avilability">
              Pick Up at Nearby Stores
              <input type="checkbox" />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Current Offers</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="category">
              <div className="Avilability">
                onsale
                <input type="checkbox" />
              </div>{" "}
              <div className="Avilability">
                Top Deals
                <input type="checkbox" />
              </div>
              <div className="Avilability">
                On Clearence
                <input type="checkbox" />
              </div>
              <div className="Avilability">
                Best Buy Execlusive
                <input type="checkbox" />
              </div>
              <div className="Avilability">
                Refrushibed
                <input type="checkbox" />
              </div>
              <div className="Avilability">
                Open Box
                <input type="checkbox" />
              </div>
              <div className="Avilability">
                Online Only
                <input type="checkbox" />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Price</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>on Sale</p>
            <p>Top Deals</p>
            <p>On Clearence</p>
            <p>Best Buy Execlusive</p>
            <p>Refrushibed</p>
            <p>Open Box</p>
            <p>Online Only</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Discount</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              <input type="checkbox" />
              60% off or More(4)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              50% off or More(14)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              40% off or More(29)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              30% off or More(91)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              20% off or More(181)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              All discounts items(373)
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Status</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              <input type="checkbox" />
              Whats New
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Brands</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              <input type="checkbox" />
              Apple(345)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              SAMSUNG(1,872)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              ASUS(378)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              HP(6,456)
            </div>
            \{" "}
            <div className="Avilability">
              <input type="checkbox" />
              ACER(368)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              LG ELECTRONICS(1,872)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              PLAY STATION(24)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              SONY(267)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              LENOVO(4,560)
            </div>{" "}
            <div className="Avilability">
              <input type="checkbox" />
              DELL(12)
            </div>{" "}
            <div className="Avilability">
              <input type="checkbox" />
              MICROSOFT(1,872)
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Sellers</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              <input type="checkbox" />
              Best buy In Canada
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="spancat">Customer ratings</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Avilability">
              <input type="checkbox" />
              5(698)
            </div>{" "}
            <div className="Avilability">
              <input type="checkbox" />
              4(963)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              3(460)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              2(153)
            </div>
            <div className="Avilability">
              <input type="checkbox" />
              1(346)
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
