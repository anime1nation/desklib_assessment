import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/svg/search.svg";
import sidebtn from "../../assets/svg/sidebar.svg"
import whats from "../../assets/svg/whatssvg.svg"

export function Sidebar(){
  return(
  <div className="linksidebar">
      <span className="content"><a href="/study/">Study</a></span>
      <span className="content"><a href="/Writing/">Writing</a></span>
      <span className="content"><a href="/Homework_help/">Homework Help</a></span>
      <span className="content"><a href="/Blog/"> Blog</a></span>
      <div className="bt">
      <button type="submit" className="btn1">Pricing</button>
      <button type="submit" className="btn2">Sign In</button>
      </div>
      </div>
  );
}

export default function Header() {
  const [menu,setMenu] = useState(false);

  return (
    <>
    <div id="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="head">
        <div className="searchbox">
          <input className="header_search" type="search" placeholder="Search here" />
          <img className="header_search-icon" src={search} alt="search_icon" />
        </div>
      <div className="linkspan">
      <span className="content"><a href="/study/">Study</a></span>
      <span className="content"><a href="/Writing/">Writing</a></span>
      <span className="content"><a href="/Homework_help/">Homework Help</a></span>
      <span className="content"><a href="/Blog/"> Blog</a></span>
      </div>
      <div className="btn">
      <button type="submit" className="btn1">Pricing</button>
      <button type="submit" className="btn2">Sign In</button>
      </div>
    </div >
    <div className="side" onClick={()=>setMenu(!menu)}>
    <img src={sidebtn} alt="a"/>
   { menu && <Sidebar/>
}
    </div>
    </div>
    <div className="whats" >
    <a href="https://wa.me/11234567890" target="_blank" rel="noreferrer"><img src={whats} alt="whats"></img></a>
    </div>
    
    </>
  );
}