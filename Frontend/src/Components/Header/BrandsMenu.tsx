import React, { useState } from "react";
import { Link } from "react-router-dom";
import NextArrow from "./NextArrow.svg";

const BrandsMenu = () => {
  const [active, setActive] = useState("");

  return (
    <div
      className="menu-main"
      data-automation="menu-main-l1"
      style={{ maxHeight: "calc(100vh - 160px)" }}
    >
      <Link
        onClick={() => {
          if (active === "Popular Brands") {
            setActive("");
          } else {
            setActive("Popular Brands");
          }
        }}
        style={
          active == "Popular Brands"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
        className="menuLink"
        title="Popular Brands"
        to="#"
      >
        Popular Brands
        <svg
          fill={active == "Popular Brands" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${
          active === "Popular Brands" ? "menuInnerActive" : ""
        }`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-popular-brands-l2"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <h2 className="categoryTitle">
            <span>Popular Brands</span>
          </h2>
          <a className="menuLink" title="Acer" href="#">
            Acer
          </a>
          <a className="menuLink" title="Amazon" href="#">
            Amazon
          </a>
          <a className="menuLink" title="Apple" href="#">
            Apple
          </a>
          <a className="menuLink" title="Asus" href="#">
            Asus
          </a>
          <a className="menuLink" title="Beats By Dr. Dre" href="#e">
            Beats By Dr. Dre
          </a>
          <a className="menuLink" title="Bose" href="#">
            Bose
          </a>
          <a className="menuLink" title="Breville" href="#">
            Breville
          </a>
          <a className="menuLink" title="Canon" href="#">
            Canon
          </a>
          <a className="menuLink" title="Dell" href="#">
            Dell
          </a>
          <a className="menuLink" title="Dyson" href="#">
            Dyson
          </a>
          <a className="menuLink" title="Fitbit" href="#">
            Fitbit
          </a>
          <a className="menuLink" title="GE" href="#">
            GE
          </a>
          <a className="menuLink" title="Google" href="#">
            Google
          </a>
          <a className="menuLink" title="GoPro" href="#">
            GoPro
          </a>
          <a className="menuLink" title="HP" href="#">
            HP
          </a>
          <a className="menuLink" title="Insignia" href="#">
            Insignia
          </a>
          <a className="menuLink" title="Instant Pot" href="#">
            Instant Pot
          </a>
          <a className="menuLink" title="JBL" href="#">
            JBL
          </a>
          <a className="menuLink" title="KitchenAid" href="#">
            KitchenAid
          </a>
          <a className="menuLink" title="Lenovo" href="#">
            Lenovo
          </a>
          <a className="menuLink" title="LG" href="#">
            LG
          </a>
          <a className="menuLink" title="Logitech" href="#">
            Logitech
          </a>
          <a className="menuLink" title="Microsoft" href="#">
            Microsoft
          </a>
          <a className="menuLink" title="Nintendo" href="#">
            Nintendo
          </a>
          <a className="menuLink" title="NVIDIA" href="#">
            NVIDIA
          </a>
          <a className="menuLink" title="Panasonic" href="#">
            Panasonic
          </a>
          <a className="menuLink" title="Philips" href="#">
            Philips
          </a>
          <a className="menuLink" title="PlayStation" href="#">
            PlayStation
          </a>
          <a className="menuLink" title="Samsung" href="#">
            Samsung
          </a>
          <a className="menuLink" title="Seagate" href="#">
            Seagate
          </a>
          <a className="menuLink" title="Sharp" href="#">
            Sharp
          </a>
          <a className="menuLink" title="Sony" href="#">
            Sony
          </a>
          <a className="menuLink" title="Toshiba" href="#">
            Toshiba
          </a>
          <a className="menuLink" title="Ultimate Ears" href="#">
            Ultimate Ears
          </a>
          <a className="menuLink" title="Whirlpool" href="#">
            Whirlpool
          </a>
          <a className="menuLink" title="Xbox" href="#">
            Xbox
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "A B") {
            setActive("");
          } else {
            setActive("A B");
          }
        }}
        className="menuLink"
        title="A B"
        to="#"
        style={
          active == "A B" ? { backgroundColor: "#001e73", color: "#fff" } : {}
        }
      >
        A B
        <svg
          fill={active == "A B" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div className={`menuInner ${active === "A B" ? "menuInnerActive" : ""}`}>
        <div
          className="menu-main-l1"
          data-automation="menu-a-b-l2"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <h2 className="categoryTitle">
            <span>A B</span>
          </h2>
          <a className="menuLink" title="Acer" href="#">
            Acer
          </a>
          <a className="menuLink" title="AKG" href="#">
            AKG
          </a>
          <a className="menuLink" title="Alienware" href="#">
            Alienware
          </a>
          <a className="menuLink" title="Altec Lansing" href="#">
            Altec Lansing
          </a>
          <a className="menuLink" title="Amazon" href="#">
            Amazon
          </a>
          <a className="menuLink" title="Apple" href="#">
            Apple
          </a>
          <a className="menuLink" title="Arlo" href="#">
            Arlo
          </a>
          <a className="menuLink" title="Astro Gaming" href="#">
            Astro Gaming
          </a>
          <a className="menuLink" title="Asus" href="#">
            Asus
          </a>
          <a className="menuLink" title="Audio Technica" href="#">
            Audio Technica
          </a>
          <a className="menuLink" title="August" href="#">
            August
          </a>
          <a className="menuLink" title="Beats by Dr. Dre" href="#e">
            Beats by Dr. Dre
          </a>
          <a className="menuLink" title="Belkin" href="#">
            Belkin
          </a>
          <a className="menuLink" title="Bell" href="#">
            Bell
          </a>
          <a className="menuLink" title="BenQ" href="#">
            BenQ
          </a>
          <a className="menuLink" title="Bissell" href="#">
            Bissell
          </a>
          <a className="menuLink" title="Bitdefender" href="#">
            Bitdefender
          </a>
          <a className="menuLink" title="Blendtec" href="#">
            Blendtec
          </a>
          <a className="menuLink" title="Bosch" href="#">
            Bosch
          </a>
          <a className="menuLink" title="Bose" href="#">
            Bose
          </a>
          <a className="menuLink" title="Bowers &amp; Wilkins" href="#s">
            Bowers &amp; Wilkins
          </a>
          <a className="menuLink" title="Braun" href="#">
            Braun
          </a>
          <a className="menuLink" title="Breville" href="#">
            Breville
          </a>
          <a className="menuLink" title="broan" href="#">
            broan
          </a>
          <a className="menuLink" title="Brother" href="#">
            Brother
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "C D E F") {
            setActive("");
          } else {
            setActive("C D E F");
          }
        }}
        className="menuLink"
        title="C D E F"
        to="#"
        style={
          active == "C D E F"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
      >
        C D E F
        <svg
          fill={active == "C D E F" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${active === "C D E F" ? "menuInnerActive" : ""}`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-c-d-e-f-l2"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <h2 className="categoryTitle">
            <span>C D E F</span>
          </h2>
          <a className="menuLink" title="Canon" href="#">
            Canon
          </a>
          <a className="menuLink" title="Casio" href="#">
            Casio
          </a>
          <a className="menuLink" title="Chatr Wireless" href="#">
            Chatr Wireless
          </a>
          <a className="menuLink" title="Citizen" href="#">
            Citizen
          </a>
          <a className="menuLink" title="Conair" href="#">
            Conair
          </a>
          <a className="menuLink" title="Corsair" href="#">
            Corsair
          </a>
          <a className="menuLink" title="Cuisinart" href="#">
            Cuisinart
          </a>
          <a className="menuLink" title="CyberPowerPC" href="#">
            CyberPowerPC
          </a>
          <a className="menuLink" title="D-Link" href="#">
            D-Link
          </a>
          <a className="menuLink" title="DefinitiveTechnology" href="#y">
            DefinitiveTechnology
          </a>
          <a className="menuLink" title="Dell" href="#">
            Dell
          </a>
          <a className="menuLink" title="Delonghi" href="#">
            Delonghi
          </a>
          <a className="menuLink" title="Denon" href="#">
            Denon
          </a>
          <a className="menuLink" title="DJI" href="#">
            DJI
          </a>
          <a className="menuLink" title="Dyson" href="#">
            Dyson
          </a>
          <a className="menuLink" title="Electrolux" href="#">
            Electrolux
          </a>
          <a className="menuLink" title="Epson" href="#">
            Epson
          </a>
          <a className="menuLink" title="Ezviz" href="#">
            Ezviz
          </a>
          <a className="menuLink" title="Fido" href="#">
            Fido
          </a>
          <a className="menuLink" title="Fitbit" href="#">
            Fitbit
          </a>
          <a className="menuLink" title="Fossil" href="#">
            Fossil
          </a>
          <a className="menuLink" title="Freedom Mobile" href="#">
            Freedom Mobile
          </a>
          <a className="menuLink" title="Frigidaire" href="#">
            Frigidaire
          </a>
          <a className="menuLink" title="Fujifilm" href="#">
            Fujifilm
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "G H I J K") {
            setActive("");
          } else {
            setActive("G H I J K");
          }
        }}
        className="menuLink"
        title="G H I J K"
        to="#"
        style={
          active == "G H I J K"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
      >
        G H I J K
        <svg
          fill={active == "G H I J K" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${
          active === "G H I J K" ? "menuInnerActive" : ""
        }`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-g-h-i-j-k-l2"
          style={{ maxHeight: "calc(100vh - 160px)" }}
        >
          <h2 className="categoryTitle">
            <span>G H I J K</span>
          </h2>
          <a className="menuLink" title="Garmin" href="#">
            Garmin
          </a>
          <a className="menuLink" title="GE" href="#">
            GE
          </a>
          <a className="menuLink" title="Google" href="#">
            Google
          </a>
          <a className="menuLink" title="GoPro" href="#">
            GoPro
          </a>
          <a className="menuLink" title="Haier" href="#">
            Haier
          </a>
          <a className="menuLink" title="Hamilton Beach" href="#">
            Hamilton Beach
          </a>
          <a className="menuLink" title="Happy Plugs" href="#">
            Happy Plugs
          </a>
          <a className="menuLink" title="Hisense" href="#">
            Hisense
          </a>
          <a className="menuLink" title="Honeywell" href="#">
            Honeywell
          </a>
          <a className="menuLink" title="House of Marley" href="#y">
            House of Marley
          </a>
          <a className="menuLink" title="HP" href="#">
            HP
          </a>
          <a className="menuLink" title="Insignia" href="#">
            Insignia
          </a>
          <a className="menuLink" title="Instant Pot" href="#">
            Instant Pot
          </a>
          <a className="menuLink" title="Intel" href="#">
            Intel
          </a>
          <a className="menuLink" title="iRobot" href="#">
            iRobot
          </a>
          <a className="menuLink" title="Jabra" href="#">
            Jabra
          </a>
          <a className="menuLink" title="Jaybird" href="#">
            Jaybird
          </a>
          <a className="menuLink" title="JBL" href="#">
            JBL
          </a>
          <a className="menuLink" title="JLAB" href="#">
            JLAB
          </a>
          <a className="menuLink" title="Kate Spade" href="#">
            Kate Spade
          </a>
          <a className="menuLink" title="Keurig" href="#">
            Keurig
          </a>
          <a className="menuLink" title="KitchenAid" href="#">
            KitchenAid
          </a>
          <a className="menuLink" title="Klipsch" href="#">
            Klipsch
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "L M N O") {
            setActive("");
          } else {
            setActive("L M N O");
          }
        }}
        className="menuLink"
        title="L M N O"
        to="#"
        style={
          active == "L M N O"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
      >
        L M N O
        <svg
          fill={active == "L M N O" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${active === "L M N O" ? "menuInnerActive" : ""}`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-l-m-n-o-l2"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <h2 className="categoryTitle">
            <span>L M N O</span>
          </h2>
          <a className="menuLink" title="Lenovo" href="#">
            Lenovo
          </a>
          <a className="menuLink" title="LG Electronics" href="#">
            LG Electronics
          </a>
          <a className="menuLink" title="LifeProof" href="#">
            LifeProof
          </a>
          <a className="menuLink" title="LIFX" href="#">
            LIFX
          </a>
          <a className="menuLink" title="Linksys" href="#">
            Linksys
          </a>
          <a className="menuLink" title="Logitech" href="#">
            Logitech
          </a>
          <a className="menuLink" title="Marantz" href="#">
            Marantz
          </a>
          <a className="menuLink" title="Marshall" href="#">
            Marshall
          </a>
          <a className="menuLink" title="Maytag" href="#">
            Maytag
          </a>
          <a className="menuLink" title="McAfee" href="#">
            McAfee
          </a>
          <a className="menuLink" title="Michael Kors" href="#">
            Michael Kors
          </a>
          <a className="menuLink" title="Microsoft" href="#">
            Microsoft
          </a>
          <a className="menuLink" title="Miele" href="#">
            Miele
          </a>
          <a className="menuLink" title="Monster" href="#">
            Monster
          </a>
          <a className="menuLink" title="Ncredible" href="#">
            Ncredible
          </a>
          <a className="menuLink" title="Nespresso" href="#">
            Nespresso
          </a>
          <a className="menuLink" title="Netgear" href="#">
            Netgear
          </a>
          <a className="menuLink" title="Nikon" href="#">
            Nikon
          </a>
          <a className="menuLink" title="Ninja" href="#">
            Ninja
          </a>
          <a className="menuLink" title="Nintendo" href="#">
            Nintendo
          </a>
          <a className="menuLink" title="NVIDIA" href="#">
            NVIDIA
          </a>
          <a className="menuLink" title="Oculus" href="#">
            Oculus
          </a>
          <a className="menuLink" title="Olympus" href="#">
            Olympus
          </a>
          <a className="menuLink" title="Onkyo" href="#">
            Onkyo
          </a>
          <a className="menuLink" title="Oster" href="#">
            Oster
          </a>
          <a className="menuLink" title="OtterBox" href="#">
            OtterBox
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "P Q R S") {
            setActive("");
          } else {
            setActive("P Q R S");
          }
        }}
        className="menuLink"
        title="P Q R S"
        to="#"
        style={
          active == "P Q R S"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
      >
        P Q R S
        <svg
          fill={active == "P Q R S" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${active === "P Q R S" ? "menuInnerActive" : ""}`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-p-q-r-s-l2"
          style={{ maxHeight: "calc(100vh - 160px)" }}
        >
          <h2 className="categoryTitle">
            <span>P Q R S</span>
          </h2>
          <a className="menuLink" title="Panasonic" href="#">
            Panasonic
          </a>
          <a className="menuLink" title="Philips" href="#">
            Philips
          </a>
          <a className="menuLink" title="Philips Hue" href="#">
            Philips Hue
          </a>
          <a className="menuLink" title="Pioneer" href="#">
            Pioneer
          </a>
          <a className="menuLink" title="Plantronics" href="#">
            Plantronics
          </a>
          <a className="menuLink" title="PlayStation" href="#">
            PlayStation
          </a>
          <a className="menuLink" title="Polk Audio" href="#">
            Polk Audio
          </a>
          <a className="menuLink" title="Razer" href="#">
            Razer
          </a>
          <a className="menuLink" title="RCA" href="#">
            RCA
          </a>
          <a className="menuLink" title="Ring" href="#">
            Ring
          </a>
          <a className="menuLink" title="Rogers" href="#">
            Rogers
          </a>
          <a className="menuLink" title="Roku" href="#">
            Roku
          </a>
          <a className="menuLink" title="Samsonite" href="#">
            Samsonite
          </a>
          <a className="menuLink" title="Samsung" href="#">
            Samsung
          </a>
          <a className="menuLink" title="Sandisk" href="#">
            Sandisk
          </a>
          <a className="menuLink" title="Seagate" href="#">
            Seagate
          </a>
          <a className="menuLink" title="Seiko" href="#">
            Seiko
          </a>
          <a className="menuLink" title="Sennheiser" href="#">
            Sennheiser
          </a>
          <a className="menuLink" title="Sharp" href="#">
            Sharp
          </a>
          <a className="menuLink" title="Shaw" href="#">
            Shaw
          </a>
          <a className="menuLink" title="Skullcandy" href="#">
            Skullcandy
          </a>
          <a className="menuLink" title="Sleep Country" href="#">
            Sleep Country
          </a>
          <a className="menuLink" title="Sonos" href="#">
            Sonos
          </a>
          <a className="menuLink" title="Sony" href="#">
            Sony
          </a>
          <a className="menuLink" title="Swann" href="#">
            Swann
          </a>
          <a className="menuLink" title="Swissgear" href="#">
            Swissgear
          </a>
        </div>
      </div>
      <Link
        onClick={() => {
          if (active === "T U V W X Y Z") {
            setActive("");
          } else {
            setActive("T U V W X Y Z");
          }
        }}
        className="menuLink"
        title="T U V W X Y Z"
        to="#"
        style={
          active == "T U V W X Y Z"
            ? { backgroundColor: "#001e73", color: "#fff" }
            : {}
        }
      >
        T U V W X Y Z
        <svg
          fill={active == "T U V W X Y Z" ? "#fff" : "#55555a"}
          className="darkGrey icon_6Cowp"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z" />
        </svg>
      </Link>
      <div
        className={`menuInner ${
          active === "T U V W X Y Z" ? "menuInnerActive" : ""
        }`}
      >
        <div
          className="menu-main-l1"
          data-automation="menu-t-u-v-w-x-y-z-l2"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <h2 className="categoryTitle">
            <span>T U V W X Y Z</span>
          </h2>
          <a className="menuLink" title="T-Fal" href="#">
            T-Fal
          </a>
          <a className="menuLink" title="TCL" href="#">
            TCL
          </a>
          <a className="menuLink" title="TELUS" href="#">
            TELUS
          </a>
          <a className="menuLink" title="Thinkware" href="#">
            Thinkware
          </a>
          <a className="menuLink" title="Tile" href="#">
            Tile
          </a>
          <a className="menuLink" title="Toshiba" href="#">
            Toshiba
          </a>
          <a className="menuLink" title="TP Link" href="#">
            TP Link
          </a>
          <a className="menuLink" title="Tumi" href="#">
            Tumi
          </a>
          <a className="menuLink" title="Turtle Beach" href="#">
            Turtle Beach
          </a>
          <a className="menuLink" title="Ultimate Ears" href="#">
            Ultimate Ears
          </a>
          <a className="menuLink" title="Virgin Plus" href="#">
            Virgin Plus
          </a>
          <a className="menuLink" title="Vitamix" href="#">
            Vitamix
          </a>
          <a className="menuLink" title="VTech" href="#">
            VTech
          </a>
          <a className="menuLink" title="Weber" href="#">
            Weber
          </a>
          <a className="menuLink" title="Western Digital" href="#l">
            Western Digital
          </a>
          <a className="menuLink" title="Whirlpool" href="#">
            Whirlpool
          </a>
          <a className="menuLink" title="Wolf Gourmet" href="#">
            Wolf Gourmet
          </a>
          <a className="menuLink" title="Xbox" href="#">
            Xbox
          </a>
          <a className="menuLink" title="Xerox" href="#">
            Xerox
          </a>
          <a className="menuLink" title="Yale" href="#">
            Yale
          </a>
          <a className="menuLink" title="Yamaha" href="#">
            Yamaha
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsMenu;
