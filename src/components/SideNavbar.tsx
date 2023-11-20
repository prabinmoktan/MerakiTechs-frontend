import Image from "next/image";
import Link from "next/link";
import React from "react";
import iMac from "../../public/imac.png";
import Tools from "../../public/Tools.png";
import Topic from "../../public/Topic.png";
import Estimate from "../../public/Estimate.png";
import fb from "../../public/fb.png";
import linkedin from "../../public/linkedin.png";
import Twitter from "../../public/Twitter.png";
const SideNavbar = () => {
  return (
    <>
      <aside
        className="sidebar sidebar-border "
        style={{
          
          position:"fixed",
          zIndex:"1",
          marginTop:"4.7em" ,
          left:"0"
        }}
      >
        <div style={{display:"flex" ,flexDirection:"column"}}>
          <Link
            href={"/"}
            className="link-item link-font"
          style={{marginTop:"70px"}}
          >
            <Image
              src={iMac}
              alt="products-title"
              width={30}
              height={30}
              style={{ display: "block",marginLeft:"7px"}}
              
            />
            Products
          </Link>
          <Link href={"/"} className="link-item link-font" 
           style={{marginTop:"26px"}}>
            <Image
              src={Tools}
              alt="tool-logo"
              width={30}
              height={30}
              style={{ display: "block",marginLeft:"5px" }}
            />
            Services
          </Link>
          <Link
            href={"/"}
            className="link-item link-font"
            style={{marginTop:"26px"}}
          >
            <Image
              src={Topic}
              alt="tool-logo"
              width={30}
              height={30}
              style={{ display: "block" }}
            />
            Blogs
          </Link>
          <Link
            href={"/"}
            className="link-item link-font"
            style={{marginTop:"26px"}}
          >
            <Image
              src={Estimate}
              alt="tool-logo"
              width={30}
              height={30}
              style={{ display: "block" }}
            />
            Pricing
          </Link>
        </div>
        <div className="logos" style={{marginTop:"40px"}}>
          <p style={{ color: "white", fontSize:"12px", marginBottom:"8px" }}>FOLLOW US</p>
          <Image src={fb} alt="fb-logo" width={25} height={25} style={{marginBottom:"8px"}}/>
          <Image src={linkedin} alt="fb-logo" width={25} height={25} style={{marginBottom:"8px"}}/>
          <Image src={Twitter} alt="fb-logo" width={25} height={25} style={{marginBottom:"37px"}}/>
        </div>
      </aside>
    </>
  );
};

export default SideNavbar;
