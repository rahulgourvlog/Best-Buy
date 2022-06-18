import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios, { AxiosResponse } from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import React from "react";
import { CartCount_Context } from "../../Context/cartCounter";

type Product = {
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
};

const ProductDetailPage = () => {
  const { isLogged } = useContext(CartCount_Context);
  const [pdata, setPData] = useState<Product[]>([]);
  const { id } = useParams();
  // console.log(id);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/best/${id}`)
      .then((responce: AxiosResponse<Product[]>) => {
        const { data } = responce;
        setPData(data);
      });
  }, []);

  const handleItem = async (e: any) => {
    const cartData = {
      quantity: 1,
      save_amount: Math.round(Math.random() * (400 - 30)) + 30,
      userid: isLogged,
      ...pdata[0],
    };
    console.log(cartData)

    axios.post(`http://localhost:8080/cart/new`, cartData, {
      headers: { "Content-Type": "application/json" },
    });

    setOpen(true);
  };

  console.log(pdata[0]);

  return (
    <>
      <div className="pmain">
        {pdata.map((e) => {
          return (
            <div>
              <div className="ptitle">
                <p className="pblue">HOME &gt; Product Details</p>
                <h3>{e.title}</h3>
                <p>
                  Reviews : ⭐⭐⭐⭐&nbsp;&nbsp;&nbsp; Model : {e._id}{" "}
                  &nbsp;&nbsp;&nbsp; Brand : {e.brand} &nbsp;&nbsp;&nbsp;{" "}
                  <span className="pblue">write your review</span>&gt;
                </p>
                <hr></hr>
              </div>
              <div className="pbody">
                <div className="pbody1">
                  <img src={e.thumbnail} />
                  {/* <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550"/> */}
                </div>
                <div className="pbody2">
                  <div className="pprice">
                    <h5 className="pred">SAVE $100</h5>
                    {/* <h1 className="pred">$899</h1> */}
                    <h1 className="pred">${e.price}</h1>
                    <h6>SALE ends:June 20,2022</h6>
                  </div>
                  <div className="pcartb">
                    <button
                      className="cartb"
                      onClick={() => {
                        handleItem(e);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button className="cartb1">Pick Up at Store</button>
                    <div>
                      <h4>
                        <img src="data:image/png;base64,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"></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sold and shipped by Best
                        Buy
                      </h4>
                      <h4>Available to ship</h4>
                      <h4>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUnKjP////l5eXk5OTm5ubj4+P19fXu7u74+Pjw8PD39/fr6+vt7e37+/vy8vIjJjAACBoYHCcAABWRkpUJEB4gIy0WGibOztAPFCHFxcdCREo0Nz88PkW8vb4AABOZmp1cXmOIiYwAAA15en7a2tuDhIi3t7mnqKpoaW6dnqFPUVdISlAtMDlYWmCrrK5wcXUAAAVk4dNWAAAUP0lEQVR4nO1dB5erKheNJXaJGlsmZWYSU6bm+/+/7gNsqGBBU+67l7fWZbmfQzwC52w2xZkgCIYoiwbMJVlUYaaKsgQzLUNhZjFRvQ8q90SVBmoXqGwyUdCKSrO/wkJNEiUNWShmtojzDDW6UL2Kih2oxETtDJVF0ayiShcK6KiUoTPD0BRLtRTN0CxVBTADqmppGheqqqrOgRpToAZEAQWdwReAq0hKX/tcnKPqnDdQg4lKKap3oFITted5dUpmHzStohYU1FAJojOZ2vmk0Z3vxl2yo/MR6J3rUHxAHaJ+CJtuvW+VqDoM1VtRg4EaA1BcQr3HwXstGgr74X/flwp/RTycS2nnk+bYFpi3okYXqqeonaGSJNFRsw+KnlocgMopCnJ0lv28JdXMynxKzYD+6DizjJFmEegTRgt78miRWdjfvQx0Omz3wnY6ne6lv9OZqYjraBqwCEqladYwVG+i6pSowUKN7JFwiKCjqafhDvMcwZ8nzA8K/lI1+P8t0eJmdTgR3R5D4GYl/VK1jCYZJCkbhBo9UH1qFEBUZ6N38KU8BI7Xl0oUX/p88XDq0ZOUEi1rNFWrofflNGILp6mYVadfQwlcblYbWjdLopolUc2SaFSNjoIcnVWb5k2iRd8G29Y0xe5oId1Xa+OhatOOD3N0hmmSldIvKyNlltUH1cehag/UaKJGGwoo6P10mokIXD+q9k9rG1mHFKr2IK1NTLW2CtGClxRSlqH0e/lRvS+qN1DQG72v1sb2u2N8KYWq/dPaRhA4kqrxEDgOqtaltQ3yNBLV00jUuNADtTO0IGUdqMJEG9Hij9baKgSOQdVupbUNpWr30druS9X6oBRSNgStE7iHaG3ziXSaepf8p7WNq8MWqsak270I3CRaW4MmGfdFm/SLjgIe9GFaWzuB6/al7VTtn9bGRdWeW2sb5mm0gT5lkKehRoBRnqbaNNkNFpgqQH+h67qNitV1VJwC8z4oYKJGFQW6OYCqiRNqbfZqednM/DjeeTv4L8ocmDkwj+MC9cai4fr6C4S7a22qJh883w0Ws9unRRC7J6FOyvrSOkBBe42e3vfuHYwrkndUx1K1YVqb8RLf0z6YnKUgjCJwg7Q2SXi5awXitJuPdKANrU1PKZWeUSpdLVHh/d41CJN70NT8GTD90jNSpvdB9Qra6Uv1/f0NhCaa8iiqNkRrOz+gCmczf2veTWu7Bo+wMDzLt9LasgZbeBplc48o2LTwYzpP0xEt9PVjLHxtRIsOqsYkcF3jQ/BAC2+ttaXUR3uMhe6rwKBqgwlc5+jpQRa+m5XRUxtVG6u1PcjCpXU3re056nDMCBgNRBHJ0UmqBglciqr2w/qh0XwykpT1Rjt8qfQEvpRKyqbT2h5p4X20NvDyMAun1NrqVI1ssO/OIyzMPU2jaVJQ0I52a22H2HE8z3McnHll1oU6I0bOebSQeLQ2sRktWrU2y1CQzCcohlLNOlA7Ojrc4xJ3ad5Ia2NPX+pDpzptW5j/8A4u3SXopmr90Buva7tymohHTyOoWh+tzcQytWmiPxTKrBdq4ww3+R++hhq8wUdSsaiIdqygcifW2mTztByXPlY6Klfy+SrRXf98woT/gdn1nFiWzK+1oekGgqrBqyTw3TAMXZiyrHbZiYbeD0BTEgdOj7oIFjAFMOEs9GZL2c5IWcbnalSNgVJ9qZzEE8T58E0XJTuaLJ6G8XFOi5I8Wpt1nEQE9lamqBkTanVhcNLZnW+I1jaR/BR+mNCtTsr6vKPAobVRxhbT0G3k8nVripLKFF/0ScYWE1qo8v3twilSHJIRJ76AYQSOXoffj67DxWcyj6Iomc/n0fZ8Df3ygfxXZRCBm9FIGW+crqUYTXWCBc/bgmN8W1dVYNu2AmOAvf0q4+o+sXsQOJCjVJ3GPHPG6WraJfJcs7iiRanTpN7DBKcg9+/BBUijtTbrc3xAXOzPqizaW66X1dDaRCBc8pJ20XitTRLeQ88ZlXabLSpQeONq8FStbZmZGLzpfFqbThA43bBgJ58nMGVZUr3sROeKAssVtnyUxn21jcaT2ceMPewSjXjejKrVrOjW2mTEHnTYPNCLgDWvpQ2AjYI6iiigyumyqlpbRtVE+5IW5x6eZl2b9D3GwobWZihh+r89eQKtjVyrhurFrtSW3I2aKjg7vP6KpbVlM9Lu1ebS2qSiwZLLzOer1QoG31WaRWXWjq5Oh5ifdENPQ9Vp5KxN7MT2ME/qNEKH1pbsfb4UjxmfsLQ26zVtp7AnjtPaiDr8fMg8Pktrk+XsvXkyh9Zm0/Szh82uMbQ2pazEibS2B85b0Pf/mFnndhKJDPP869qebmZGLSpR7RktGnUoPU0d0klZ3hOdhET7aW00Amcvd1j06kwTW7hUWKRMKCpRY1G1Clqde6LNW5zfvtebzWYN0ybNN+VliQbOFPpcnqAvZc492RnVdRJ5mj2kJnwl6BIAxFwEPc9qqCmeNpOMKjMLW1YqFJWoi71HTzSqNnRjArz315vMwnz0RFXVsp/xE7GP1lb40izMy9U1UTIF1atoseNF1qOplmpW1kTl/jFvhCCrxOBKopUwn1UnZWwhmJaZZXhbQXnZioL8SbYT1WLrujZLy2KidxIGaW2iEJ3fj/C/5XIJ/8VZcdWFvp5ME72/yzQkr2Nd2zIbRe1XOr0OqVqbKv/s0nkVnhT6zhYSLTuZphKR1kYlZRi1Qa4ceB+K3iSclXsJneYtHPdUO1mQJDCN1JpHC8YJPOZr/qzxV2Sbcj+tLdqNfaoDHNhb06wpDi4G6juCquMs220EQ3yKArWojYX39ZG0zNcQo6ffsZNEiw10tub7NHsX3M1bmS7FP1n6IRvKInRelpEtmHK71qZ8jGyk0EK0eWE50e4MPDnKTLWuAI2Mf14jW6MQuMKXlk2b+5k26N293n//SZqC0PleSk2yV8TDqSycqg65niAMVqZQHz3lZ9DKozdWLL5Q6dNMH3M/g7eqE7jU0yBfCsYyLucXEjgwzbQVd1p8U5WodBTx+79RoSz+QjKw+ZCFfuRjvFpsre205p+N8fx3FJnNx2wiqiSVrbWptgwHUBKaVpHSXCovu1DDthFNemwbRclZ6Tp8FEjgTJrWBokBnlcRq3MwYjEHo7JRNKh+e6ifwSn8uN15babFu1BvyhRc2rU26nJhWzaz2RY8EgTwsoqi+jb07ffjaxB60/Uwrc0wNHO17ZF+j9/+Q4THRvJAboXST2u77n20fR5PtqR5XF6WaOw+h31Ig7OEIVrbcToB7U7Jj6xGPGw7g/YxOyzHJH+FLWxqbXVfmqIPUvXHJD+q6FNPOjMzJvkrgaG1kVPbj95DOibFW6GhtUGSo0OSY0MChyRRSODMHDX+RAvR4yt2U2t7pv2HY1J8suha21PtIR2T4pPKGj1Rd3b1shAvqp96DrEsnaI9taTMwq51bTnavYd04fr++vNyuHyuYyeeevTkxl7w8nO9/nx9Oz1pU7zVqFob5x7ScPe5XGFRxFD1eXJ+240VtIi08OPDaS7jrSmCnJyO3332itV96ah4GLpLWTBNORtT4YVKr4uJhlAL5+tk49Vk2QSoaQvRtdtGZCFNa6N/LmDedmpE4C0VobEGzpQ/3ClGUf7XFp8CVpsATS67jrYKLaxrbZy+1HlTG5OladWb19F6VBCfBWIuopgshc1kNWt/gVVfKnaua2NauD+Xw30BKHiHpZxNB4MT96rENLmbJJd2UZMyFMUgxIW31n7AiBbVgx8JAseycL/KflMW5NPh5Xv2/XU4R0Z2npyVjBouhj9W+nzQy6xeL2tY+tv7StOyLqm3bk7OLSy1NhtTNZugaojAZSjLwn0EsKIFwO/LHrrxBYqJofP9qgs20rl0dYSJ4UXDSpktJIe9H6JIuwhc/3+XlaFC1DC1ZYuJ8QkUWhu8l3Nd2z7C94rC1o2rM11IkcXnWSbcYSP4tHCnNufX6kFxgfc5V9PJs5bzuZCnGXDaNd1C54zvNcWf5qR2vEls/HwrzilXJMzjbTEnv+FSgv1SxxOgNlu3rEeLDq2NaqF7RS9FM5OAFpwCL8KdWl3yBcZdlDrmd+ob8t8sTKzlGasX4DoktDbopVKqpqQkR6kSOGo/DDAhMhKWw9ydDB0WxKeAhO8Cegb7wOhq7gsmZfaKtSYiPimZFf20NoqF/glvV5gz2fDCibCguuIJiwFuoTrbl7g/AFcRa2FLlXl3a21NCxcbHNv1FzZ/WsyQhZrKsbomPiMio7QtPfKXOupmc8Y7oMXDNq2taSGqQmFufbT1MrzSXBOZLakl4YVW7YtWdgl2JIwNR9kImNDa8LyKKtfmIlJUVJpnmwQqmpnRyIcPYnTcKvmDuwjz8a+hPTF8Rc9gLclQ4/qodKKk4AdVkcnYRO1Hlb37XdFCbayPcY8Gupd4hoX3tpXs+enql/cGbzoqYfB04k5GVG1OGBjOlivo1X7XRFFeoiCKSq9DLxmktZmNRSh+hAlROSceLCJ8LrCsJ19lkNolqA7FgTER9XFbIudZvaNloU4t6B9lWe7BRs9AXzMQNNa1mZiqQY6GNmwWBC5H5fr0vq8A09JXhdi/WKvplCQkfcTm0/ADenwm6WMl912AREspN3k4HwKiXzZEDYJC+IhaCltaC3GPgpFZYVmW2q21CYdqJS5eMKUqj0pAezvye4tdO/hkC+ir9IHeNP41YZBWircaXACxrq2sWn+FiSFtTsVL5GHntQlmlTwEVx2hha9zj6SDItrXHqHmchg79SPkAMoG4iQysVatFI3Q6kxBtiitFIUS5koFqtYmyJFHmui+mwgt3JgTpfWddl9ZLh7OM+25aA5cLefMZVhb5/y1BG9gTqxVM4oFV8EVoWqzD6D9+rR1bRlVUxRM1ZQKgVPs5Jt0bWcb6EAsLIxt8l5F+Mx/1I8gedJWwybnHAMNdot1VfDHsnLxkxlRXtri00bLFeubshbewcisALkVvb6NoBxhsMu2XcBhBToapPipl2Kdd/rSDvmP+ltETlZOr90aeYrRazcLHxmfKsdfaaJX/CxA6JtL/G3gOuuTzrmH1Jr/Hj5fXtDOik8TDexLC79r6xcuVQvn683m5QX/KZHVLkv0gscsVQvLzQZaQdQWXwChy01ZwtfPe2Tkxw/319pyVMQhydItJeuoRePb2WJFa1uXrRTTQzVVO/O1r9lS2AK1SNRSsT+RC/cEgweptdlFeAg+AUYFVdWz4gFJ1Rham1gQOLFJ4PQqWmgU6DUTH6oo13nvDbtAU0G1WkIDzb2mJZxyQxZrRVTKe+2igWAPnqGgWN5TWSOco72/jVBDiz4OO2K+9g++DVB0w9miROXaNg3aZztItHxN/tYkNhsU3RDGzRLtuYeUqbUx0HI1qn8uUbMc9MC3zPkdUoiGRRRYmIZQ6KXlYMJLSrRrD2lB1eyUqtk5gTPaUCEqhxb7k0BB/a1QKwFUy7XYKMGYgg0QUlQQruXy9bVQLUGrlKCSKPd5bcS4yLvikKLPjwTPdi3+L8vJhDgQuOd0a85qUzKY+Gzc/stypEIR7D7fP5Y/pDQWvlojvqQDyFAeu9fXj+M3KQr5Nv93SFsJXOUzVpWhceCGLskvFjEcUVfrcMhnrOSqOBCEYUVfjl+HnNemFFQt4zoKQZPoKLrUQesOFO9kE/fSS2hD7UvL7MviWwH9y+1e18b6+ozaoqyHqaBa85rVBlFF7RJNoxlTDkWCu1zbLdp1finfl+Vk48Bi1e6XVY3twz9jJUfMTbf7k8V/XtvAb6tf6SaGX7JI3sv1HVIzcqmD5wUMTsPOa5MrVM1opWpilWjJ4EiZj104l+zEkz5UjSRlNQKXrCl9MYCEvkrVZBpVI9Axq6AlWV/N6iNcNzwDLqrW2C1qmod9Y/z3k5gDD9ytW9hnHzCB2sKHS2qI8e5dMmu7g+l7hklUFmsWZmcL6NFlXxK4met9rdi7g6sWEuND08xImZlqbWZKtCqo0YIKwumCPr4Vxr7zv59fRbAq9wJqCTXUYqFAmC83eycOYem74BjBhyfu1Sr3qgyU9xuW1U8DJ6fzx+82EYApVsP86I8Aw44EcOloyxaNlDWOBrnNd0htOT1al75dYfxHD2GdqE10QLRopWo9CFwdnfw7pK0ns/U5r603VXtaFLBRru+Q1iuum5R1UrUa2jjug/8A+j/1O6QDTrvup7VVvzjaB73vd0jrVK2utUFbm1pbDS2oWorWiBYdFYehbALXinYQuMFaW6t+NgQdQuDGfxshI2V1W0Yc5DIUtdsJ3FCqRlrIRdU60F5UbSCBG0bVCHSY1ibR0CopG4IOI3Bi9RCQm2ttf0604NbaWFStlcD1pWqcBK5NaxtMnkCfe0EVBT2JFhttLQFQ0f5aWx+qNgmBm4KqTaK1PV3nu4XWxqRq/ASO4zNWA7W2kn7RqRovgWOiFFLWByVOnm5F+0aLyahaHwJHnsxGRafR2toI3GRUrUNra6Nq3FrbCKo2OYFj0jq1FeXQ2qhUjZ/ATU7V7qK1PX20uJXWJnVQtftobQDg2Ub4r57xopSUkajSioLnRrv2kP7T2p6zS95Va5OeSWurkrJHEzi5iYI2tEngUrRFa5P+k1rbwwjcbbW256dqZhdVayFwuU5j1bS2ianaP61tcLS4x7q2YVpbF4G7rdYGSs5Ty/qilJueBqVpbfxU7Z/W9l/X2voQuJtqbYjkNKkaG23SLx60k6qNI3A0Jerv1trqz/dPa7sBVRtM4No9zbhBYT9PI1E9jUT1KRLNp9BRkKN/SbS4r9Y2kMBNqLUNpWp/CK1DzFulVcY/re3PGT09RmubmsAN1tp6UbURBO4WVI1F4FqVqL9ba5uYwN1eazOmpGrjCFxvqtYH1cwJPM1AqkZBm6SMk8ABCvp/7l5zxb3s0MYAAAAASUVORK5CYII="></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will be
                        delivered on June 16, 2022 Enjoy <b>free shipping</b> on{" "}
                        <span className="pblue">most orders over $35.</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  <Alert severity="success">
                    Your item added to the cart — check it out!
                  </Alert>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description"></DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Continue</Button>
                </DialogActions>
              </Dialog>
              <div className="ptail">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <h3>More Information</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>Powerful suction for a thorough clean</h4>
                      <ul>
                        <li>
                          Re-tuned motor electronics generate more suction power
                          than previous models
                        </li>
                        <br></br>
                        <li>
                          2-tier Radial cyclones create centrifugal forces to
                          expel air out of the air and into the bin
                        </li>
                        <br></br>
                        <li>
                          Advanced whole-machine filtration: the Dyson V8 Animal
                          vacuum captures allergens and expels cleaner air than
                          the air you breathe
                        </li>
                        <br></br>
                        <li>
                          Sealed system keeps dirty air inside the vacuum,
                          preventing it from going back into your environment
                        </li>
                      </ul>
                      <h4>Incredible convenience</h4>
                      <ul>
                        <li>
                          Powerful direct drive cleaner head deep cleans carpets
                          to remove pet hair and dirt
                        </li>
                        <br></br>
                        <li>
                          Lightweight 2.7kg design makes it easy to vacuum high
                          and out-of-the-way spaces
                        </li>
                        <br></br>
                        <li>
                          Up to 40 minutes run time (Actual run time may vary
                          based on power mode and/or attachments used)
                        </li>
                        <br></br>
                        <li>
                          Extra tools allow you to tackle even the toughest
                          cleaning jobs
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>
                      <h3>What's Included</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>Combination and Crevice Tools</li>
                        <br></br>
                        <li>Mini Motor Head Tool</li>
                        <br></br>
                        <li>Mini Soft Dusting Brush</li>
                        <br></br>
                        <li>Docking Station</li>
                      </ul>
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
                      <h3>Details & Specs</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Vacuum Type
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stick{" "}
                      <br></br>
                      Product Type
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stick Vacuum
                      <br></br>
                      Colour
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Nickle<br></br>
                      Ideal Surface
                      Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multi-Surface
                      Floor<br></br>
                      Compact
                      Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes
                      <br></br>
                      Wi-Fi
                      Connectivity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No
                      <br></br>
                      Works with Google
                      Assistant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No
                      <br></br>
                      Dust Containment
                      System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bagless
                      <br></br>
                      Variable Speed
                      Control&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                      (Eco, Auto, and Boost)
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography>
                      <h3>From the Manufacturer</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography>
                      <h3>Customer Reviews</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography>
                      <h3>Common Questions</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <Typography>
                      <h3>Return Policy</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                  >
                    <Typography>
                      <h3>Sponsored products</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetailPage;
