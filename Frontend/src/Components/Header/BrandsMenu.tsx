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
        to=""
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
          <a className="menuLink" title="Acer" href="/acer">
            Acer
          </a>
          <a className="menuLink" title="Amazon" href="/amazon">
            Amazon
          </a>
          <a className="menuLink" title="Apple" href="/apple">
            Apple
          </a>
          <a className="menuLink" title="Asus" href="/asus">
            Asus
          </a>
          <a
            className="menuLink"
            title="Beats By Dr. Dre"
            href="/beats by dr. dre"
          >
            Beats By Dr. Dre
          </a>
          <a className="menuLink" title="Bose" href="/bose">
            Bose
          </a>
          <a className="menuLink" title="Breville" href="/breville">
            Breville
          </a>
          <a className="menuLink" title="Canon" href="/canon">
            Canon
          </a>
          <a className="menuLink" title="Dell" href="/dell">
            Dell
          </a>
          <a className="menuLink" title="Dyson" href="/dyson">
            Dyson
          </a>
          <a className="menuLink" title="Fitbit" href="/fitbit">
            Fitbit
          </a>
          <a className="menuLink" title="GE" href="/ge">
            GE
          </a>
          <a className="menuLink" title="Google" href="/google">
            Google
          </a>
          <a className="menuLink" title="GoPro" href="/gopro">
            GoPro
          </a>
          <a className="menuLink" title="HP" href="/hp">
            HP
          </a>
          <a className="menuLink" title="Insignia" href="/insignia">
            Insignia
          </a>
          <a className="menuLink" title="Instant Pot" href="/instant pot">
            Instant Pot
          </a>
          <a className="menuLink" title="JBL" href="/jbl">
            JBL
          </a>
          <a className="menuLink" title="KitchenAid" href="/kitchenaid">
            KitchenAid
          </a>
          <a className="menuLink" title="Lenovo" href="/lenovo">
            Lenovo
          </a>
          <a className="menuLink" title="LG" href="/lg">
            LG
          </a>
          <a className="menuLink" title="Logitech" href="/logitech">
            Logitech
          </a>
          <a className="menuLink" title="Microsoft" href="/microsoft">
            Microsoft
          </a>
          <a className="menuLink" title="Nintendo" href="/nintendo">
            Nintendo
          </a>
          <a className="menuLink" title="NVIDIA" href="/nvidia">
            NVIDIA
          </a>
          <a className="menuLink" title="Panasonic" href="/panasonic">
            Panasonic
          </a>
          <a className="menuLink" title="Philips" href="/philips">
            Philips
          </a>
          <a className="menuLink" title="PlayStation" href="/playstation">
            PlayStation
          </a>
          <a className="menuLink" title="Samsung" href="/samsung">
            Samsung
          </a>
          <a className="menuLink" title="Seagate" href="/seagate">
            Seagate
          </a>
          <a className="menuLink" title="Sharp" href="/sharp">
            Sharp
          </a>
          <a className="menuLink" title="Sony" href="/sony">
            Sony
          </a>
          <a className="menuLink" title="Toshiba" href="/toshiba">
            Toshiba
          </a>
          <a className="menuLink" title="Ultimate Ears" href="/ultimate ears">
            Ultimate Ears
          </a>
          <a className="menuLink" title="Whirlpool" href="/whirlpool">
            Whirlpool
          </a>
          <a className="menuLink" title="Xbox" href="/xbox">
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
        to=""
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
          <a className="menuLink" title="Acer" href="/acer">
            Acer
          </a>
          <a className="menuLink" title="AKG" href="/akg">
            AKG
          </a>
          <a className="menuLink" title="Alienware" href="/alienware">
            Alienware
          </a>
          <a className="menuLink" title="Altec Lansing" href="/altec lansing">
            Altec Lansing
          </a>
          <a className="menuLink" title="Amazon" href="/amazon">
            Amazon
          </a>
          <a className="menuLink" title="Apple" href="/apple">
            Apple
          </a>
          <a className="menuLink" title="Arlo" href="/arlo">
            Arlo
          </a>
          <a className="menuLink" title="Astro Gaming" href="/astro gaming">
            Astro Gaming
          </a>
          <a className="menuLink" title="Asus" href="/asus">
            Asus
          </a>
          <a className="menuLink" title="Audio Technica" href="/audio technica">
            Audio Technica
          </a>
          <a className="menuLink" title="August" href="/august">
            August
          </a>
          <a
            className="menuLink"
            title="Beats by Dr. Dre"
            href="/beats by dr. dre"
          >
            Beats by Dr. Dre
          </a>
          <a className="menuLink" title="Belkin" href="/belkin">
            Belkin
          </a>
          <a className="menuLink" title="Bell" href="/bell">
            Bell
          </a>
          <a className="menuLink" title="BenQ" href="/benq">
            BenQ
          </a>
          <a className="menuLink" title="Bissell" href="/bissell">
            Bissell
          </a>
          <a className="menuLink" title="Bitdefender" href="/bitdefender">
            Bitdefender
          </a>
          <a className="menuLink" title="Blendtec" href="/blendtec">
            Blendtec
          </a>
          <a className="menuLink" title="Bosch" href="/bosch">
            Bosch
          </a>
          <a className="menuLink" title="Bose" href="/bose">
            Bose
          </a>
          <a
            className="menuLink"
            title="Bowers &amp; Wilkins"
            href="/bowers &amp; wilkins"
          >
            Bowers &amp; Wilkins
          </a>
          <a className="menuLink" title="Braun" href="/braun">
            Braun
          </a>
          <a className="menuLink" title="Breville" href="/breville">
            Breville
          </a>
          <a className="menuLink" title="broan" href="/broan">
            broan
          </a>
          <a className="menuLink" title="Brother" href="/brother">
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
        to=""
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
          <a className="menuLink" title="Canon" href="/canon">
            Canon
          </a>
          <a className="menuLink" title="Casio" href="/casio">
            Casio
          </a>
          <a className="menuLink" title="Chatr Wireless" href="/chatr wireless">
            Chatr Wireless
          </a>
          <a className="menuLink" title="Citizen" href="/citizen">
            Citizen
          </a>
          <a className="menuLink" title="Conair" href="/conair">
            Conair
          </a>
          <a className="menuLink" title="Corsair" href="/corsair">
            Corsair
          </a>
          <a className="menuLink" title="Cuisinart" href="/cuisinart">
            Cuisinart
          </a>
          <a className="menuLink" title="CyberPowerPC" href="/cyberpowerpc">
            CyberPowerPC
          </a>
          <a className="menuLink" title="D-Link" href="/d-link">
            D-Link
          </a>
          <a
            className="menuLink"
            title="DefinitiveTechnology"
            href="/definitivetechnology"
          >
            DefinitiveTechnology
          </a>
          <a className="menuLink" title="Dell" href="/dell">
            Dell
          </a>
          <a className="menuLink" title="Delonghi" href="/delonghi">
            Delonghi
          </a>
          <a className="menuLink" title="Denon" href="/denon">
            Denon
          </a>
          <a className="menuLink" title="DJI" href="/dji">
            DJI
          </a>
          <a className="menuLink" title="Dyson" href="/dyson">
            Dyson
          </a>
          <a className="menuLink" title="Electrolux" href="/electrolux">
            Electrolux
          </a>
          <a className="menuLink" title="Epson" href="/epson">
            Epson
          </a>
          <a className="menuLink" title="Ezviz" href="/ezviz">
            Ezviz
          </a>
          <a className="menuLink" title="Fido" href="/fido">
            Fido
          </a>
          <a className="menuLink" title="Fitbit" href="/fitbit">
            Fitbit
          </a>
          <a className="menuLink" title="Fossil" href="/fossil">
            Fossil
          </a>
          <a className="menuLink" title="Freedom Mobile" href="/freedom mobile">
            Freedom Mobile
          </a>
          <a className="menuLink" title="Frigidaire" href="/frigidaire">
            Frigidaire
          </a>
          <a className="menuLink" title="Fujifilm" href="/fujifilm">
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
        to=""
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
          <a className="menuLink" title="Garmin" href="/garmin">
            Garmin
          </a>
          <a className="menuLink" title="GE" href="/ge">
            GE
          </a>
          <a className="menuLink" title="Google" href="/google">
            Google
          </a>
          <a className="menuLink" title="GoPro" href="/gopro">
            GoPro
          </a>
          <a className="menuLink" title="Haier" href="/haier">
            Haier
          </a>
          <a className="menuLink" title="Hamilton Beach" href="/hamilton beach">
            Hamilton Beach
          </a>
          <a className="menuLink" title="Happy Plugs" href="/happy plugs">
            Happy Plugs
          </a>
          <a className="menuLink" title="Hisense" href="/hisense">
            Hisense
          </a>
          <a className="menuLink" title="Honeywell" href="/honeywell">
            Honeywell
          </a>
          <a
            className="menuLink"
            title="House of Marley"
            href="/house of marley"
          >
            House of Marley
          </a>
          <a className="menuLink" title="HP" href="/hp">
            HP
          </a>
          <a className="menuLink" title="Insignia" href="/insignia">
            Insignia
          </a>
          <a className="menuLink" title="Instant Pot" href="/instant pot">
            Instant Pot
          </a>
          <a className="menuLink" title="Intel" href="/intel">
            Intel
          </a>
          <a className="menuLink" title="iRobot" href="/irobot">
            iRobot
          </a>
          <a className="menuLink" title="Jabra" href="/jabra">
            Jabra
          </a>
          <a className="menuLink" title="Jaybird" href="/jaybird">
            Jaybird
          </a>
          <a className="menuLink" title="JBL" href="/jbl">
            JBL
          </a>
          <a className="menuLink" title="JLAB" href="/jlab">
            JLAB
          </a>
          <a className="menuLink" title="Kate Spade" href="/kate spade">
            Kate Spade
          </a>
          <a className="menuLink" title="Keurig" href="/keurig">
            Keurig
          </a>
          <a className="menuLink" title="KitchenAid" href="/kitchenaid">
            KitchenAid
          </a>
          <a className="menuLink" title="Klipsch" href="/klipsch">
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
        to=""
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
          <a className="menuLink" title="Lenovo" href="/lenovo">
            Lenovo
          </a>
          <a className="menuLink" title="LG Electronics" href="/lg electronics">
            LG Electronics
          </a>
          <a className="menuLink" title="LifeProof" href="/lifeproof">
            LifeProof
          </a>
          <a className="menuLink" title="LIFX" href="/lifx">
            LIFX
          </a>
          <a className="menuLink" title="Linksys" href="/linksys">
            Linksys
          </a>
          <a className="menuLink" title="Logitech" href="/logitech">
            Logitech
          </a>
          <a className="menuLink" title="Marantz" href="/marantz">
            Marantz
          </a>
          <a className="menuLink" title="Marshall" href="/marshall">
            Marshall
          </a>
          <a className="menuLink" title="Maytag" href="/maytag">
            Maytag
          </a>
          <a className="menuLink" title="McAfee" href="/mcafee">
            McAfee
          </a>
          <a className="menuLink" title="Michael Kors" href="/michael kors">
            Michael Kors
          </a>
          <a className="menuLink" title="Microsoft" href="/microsoft">
            Microsoft
          </a>
          <a className="menuLink" title="Miele" href="/miele">
            Miele
          </a>
          <a className="menuLink" title="Monster" href="/monster">
            Monster
          </a>
          <a className="menuLink" title="Ncredible" href="/ncredible">
            Ncredible
          </a>
          <a className="menuLink" title="Nespresso" href="/nespresso">
            Nespresso
          </a>
          <a className="menuLink" title="Netgear" href="/netgear">
            Netgear
          </a>
          <a className="menuLink" title="Nikon" href="/nikon">
            Nikon
          </a>
          <a className="menuLink" title="Ninja" href="/ninja">
            Ninja
          </a>
          <a className="menuLink" title="Nintendo" href="/nintendo">
            Nintendo
          </a>
          <a className="menuLink" title="NVIDIA" href="/nvidia">
            NVIDIA
          </a>
          <a className="menuLink" title="Oculus" href="/oculus">
            Oculus
          </a>
          <a className="menuLink" title="Olympus" href="/olympus">
            Olympus
          </a>
          <a className="menuLink" title="Onkyo" href="/onkyo">
            Onkyo
          </a>
          <a className="menuLink" title="Oster" href="/oster">
            Oster
          </a>
          <a className="menuLink" title="OtterBox" href="/otterbox">
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
        to=""
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
          <a className="menuLink" title="Panasonic" href="/panasonic">
            Panasonic
          </a>
          <a className="menuLink" title="Philips" href="/philips">
            Philips
          </a>
          <a className="menuLink" title="Philips Hue" href="/philips hue">
            Philips Hue
          </a>
          <a className="menuLink" title="Pioneer" href="/pioneer">
            Pioneer
          </a>
          <a className="menuLink" title="Plantronics" href="/plantronics">
            Plantronics
          </a>
          <a className="menuLink" title="PlayStation" href="/playstation">
            PlayStation
          </a>
          <a className="menuLink" title="Polk Audio" href="/polk audio">
            Polk Audio
          </a>
          <a className="menuLink" title="Razer" href="/razer">
            Razer
          </a>
          <a className="menuLink" title="RCA" href="/rca">
            RCA
          </a>
          <a className="menuLink" title="Ring" href="/ring">
            Ring
          </a>
          <a className="menuLink" title="Rogers" href="/rogers">
            Rogers
          </a>
          <a className="menuLink" title="Roku" href="/roku">
            Roku
          </a>
          <a className="menuLink" title="Samsonite" href="/samsonite">
            Samsonite
          </a>
          <a className="menuLink" title="Samsung" href="/samsung">
            Samsung
          </a>
          <a className="menuLink" title="Sandisk" href="/sandisk">
            Sandisk
          </a>
          <a className="menuLink" title="Seagate" href="/seagate">
            Seagate
          </a>
          <a className="menuLink" title="Seiko" href="/seiko">
            Seiko
          </a>
          <a className="menuLink" title="Sennheiser" href="/sennheiser">
            Sennheiser
          </a>
          <a className="menuLink" title="Sharp" href="/sharp">
            Sharp
          </a>
          <a className="menuLink" title="Shaw" href="/shaw">
            Shaw
          </a>
          <a className="menuLink" title="Skullcandy" href="/skullcandy">
            Skullcandy
          </a>
          <a className="menuLink" title="Sleep Country" href="/sleep country">
            Sleep Country
          </a>
          <a className="menuLink" title="Sonos" href="/sonos">
            Sonos
          </a>
          <a className="menuLink" title="Sony" href="/sony">
            Sony
          </a>
          <a className="menuLink" title="Swann" href="/swann">
            Swann
          </a>
          <a className="menuLink" title="Swissgear" href="/swissgear">
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
        to=""
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
          <a className="menuLink" title="T-Fal" href="/t-fal">
            T-Fal
          </a>
          <a className="menuLink" title="TCL" href="/tcl">
            TCL
          </a>
          <a className="menuLink" title="TELUS" href="/telus">
            TELUS
          </a>
          <a className="menuLink" title="Thinkware" href="/thinkware">
            Thinkware
          </a>
          <a className="menuLink" title="Tile" href="/tile">
            Tile
          </a>
          <a className="menuLink" title="Toshiba" href="/toshiba">
            Toshiba
          </a>
          <a className="menuLink" title="TP Link" href="/tp link">
            TP Link
          </a>
          <a className="menuLink" title="Tumi" href="/tumi">
            Tumi
          </a>
          <a className="menuLink" title="Turtle Beach" href="/turtle beach">
            Turtle Beach
          </a>
          <a className="menuLink" title="Ultimate Ears" href="/ultimate ears">
            Ultimate Ears
          </a>
          <a className="menuLink" title="Virgin Plus" href="/virgin plus">
            Virgin Plus
          </a>
          <a className="menuLink" title="Vitamix" href="/vitamix">
            Vitamix
          </a>
          <a className="menuLink" title="VTech" href="/vtech">
            VTech
          </a>
          <a className="menuLink" title="Weber" href="/weber">
            Weber
          </a>
          <a
            className="menuLink"
            title="Western Digital"
            href="/western digital"
          >
            Western Digital
          </a>
          <a className="menuLink" title="Whirlpool" href="/whirlpool">
            Whirlpool
          </a>
          <a className="menuLink" title="Wolf Gourmet" href="/wolf gourmet">
            Wolf Gourmet
          </a>
          <a className="menuLink" title="Xbox" href="/xbox">
            Xbox
          </a>
          <a className="menuLink" title="Xerox" href="/xerox">
            Xerox
          </a>
          <a className="menuLink" title="Yale" href="/yale">
            Yale
          </a>
          <a className="menuLink" title="Yamaha" href="/yamaha">
            Yamaha
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsMenu;
