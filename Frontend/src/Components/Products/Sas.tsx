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
              <p>
                <a>Get Shiped</a>
              </p>
              <Check />
            </div>
            <div className="Avilability">
              <p>
                <a>Pick Up at Nearby Stores</a>
              </p>
              <Check />
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
                <p>
                  <a>
                    <p>on Sale</p>
                  </a>
                </p>
                <Check />
              </div>{" "}
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>Top Deals</p>
                  </a>
                </p>
                <Check />
              </div>
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>On Clearence</p>
                  </a>
                </p>
                <Check />
              </div>
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>
                      <p>Best Buy Execlusive</p>
                    </p>
                  </a>
                </p>
                <Check />
              </div>
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>
                      <p>Refrushibed</p>
                    </p>
                  </a>
                </p>
                <Check />
              </div>
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>
                      <p>Open Box</p>
                    </p>
                  </a>
                </p>
                <Check />
              </div>
              <div className="Avilability">
                <p>
                  <a>
                    {" "}
                    <p>
                      <p>Online Only</p>
                    </p>
                  </a>
                </p>
                <Check />
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
              <Check />
              <p>60% off or More(4)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>50% off or More(14)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>40% off or More(29)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>30% off or More(91)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>20% off or More(181)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>All discounts items(373)</p>
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
              <Check />
              <p>Whats New</p>
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
              <Check />
              <p>Apple(345)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>SAMSUNG(1,872)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>ASUS(378)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>HP(6,456)</p>
            </div>
            \{" "}
            <div className="Avilability">
              <Check />
              <p>ACER(368)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>LG ELECTRONICS(1,872)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>PLAY STATION(24)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>SONY(267)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>LENOVO(4,560)</p>
            </div>{" "}
            <div className="Avilability">
              <Check />
              <p>DELL(12)</p>
            </div>{" "}
            <div className="Avilability">
              <Check />
              <p>MICROSOFT(1,872)</p>
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
              <Check />
              <p>Best buy In Canada</p>
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
              <Check />
              <p>5(698)</p>
            </div>{" "}
            <div className="Avilability">
              <Check />
              <p>4(963)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>3(460)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>2(153)</p>
            </div>
            <div className="Avilability">
              <Check />
              <p>1(346)</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
