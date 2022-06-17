import React, { useEffect, useState } from "react";
import Laptop from "./images/Laptops.jpg";
import "./Shopout.css";
import Tablets from "./images/Tablets.jpg";
import Monitors from "./images/Monitors.jpg";
import Desktop from "./images/Desktop.jpg";
import Tvs from "./images/Tvs.jpg";
import HomeAudio from "./images/HomeAudio.jpg";
import Headphones from "./images/Head.jpg";
import Cellphone from "./images/cell.jpg";
import Video from "./images/video.jpg";
import Camera from "./images/camera.jpg";
import watch from "./images/watch.jpg";
import Fridge from "./images/fridge.jpg";
import axios from "axios";

interface productType {
  thumbnail: string;
  title: string;
}

function Shopour() {
  const [product, setProduct] = useState<productType[]>([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios({
      url: "http://localhost:3000/products",
      method: "GET",
    })
      .then((res) => {
        setProduct(res.data.splice(0, 12));
      })
      .catch((err) => console.log("Err"));
  };
  console.log(product);
  return (
    <>
      <div>
        <h3>Shop our most popular outlet categories</h3>
        <div className="shopour">
          <div>
            <img src={Laptop} alt="" />
            <p>Laptops and macBook</p>
          </div>
          <div>
            <img src={Tablets} alt="" />
            <p>Tablets and Ipads</p>
          </div>
          <div>
            <img src={Monitors} alt="" />
            <p>Monitors</p>
          </div>
          <div>
            <img src={Desktop} alt="" />
            <p>Desktops</p>
          </div>
          <div>
            {/* {" "} */}
            <img src={Tvs} alt="" />
            <p>Tvs and Home Theatere</p>
          </div>
          <div>
            <img src={HomeAudio} alt="" />
            <p>HomeAudio</p>
          </div>
          <div>
            <img src={Headphones} alt="" />
            <p>Headphones and Portable Audio</p>
          </div>
          <div>
            <img src={Cellphone} alt="" />
            <p>Cellphones</p>
          </div>
          <div>
            <img src={Video} alt="" />
            <p>Video Games</p>
          </div>
          <div>
            <img src={Camera} alt="" />
            <p>Cameras and Camcorders</p>
          </div>
          <div>
            <img src={watch} alt="" />
            <p>Wearable technology</p>
          </div>
          <div>
            <img src={Fridge} alt="" />
            <p>
              <a href="*/#">Major Appliances</a>
            </p>
          </div>
        </div>
        <h3>More deals to get excited about</h3>

        <div className="mehbooba">
          {product.map((t: productType) => {
            return (
              <div className="abcd">
                <div>
                  <img src={t.thumbnail} alt="" />
                  <p>{t.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shopour;
