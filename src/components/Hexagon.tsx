import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Twit from '../../public/Twit.png'
import Ionic from '../../public/Ionic.png';
const Hexagon = () => {
  return (
    <>
    <div style={{position:"relative"}}>

{/*    
      <Typography variant="h6" style={{ marginLeft: "3rem" }}>
        Why choose us
      </Typography>
      
   
      <svg width="200" height="200" style={{display:"flex", justifyContent:"space-between"}}>
  <polygon points="100 0, 250 70, 200 150, 100 210, 0 150, 0 50" fill="#3498db" stroke="#e74c3c" stroke-width="2"  transform="rotate(90 100 100)" />
  
  <image xlinkHref="meraki-tech/public/Twitter.png" y="50" width="100" height="100" />
  
  <text x="50%" y="150" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">
    Your Text Here
  </text>
</svg> */}
{/* first hex */}
<svg
  className="polygon-1"
  width="357"
  height="309"
  viewBox="0 0 357 309"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.34258 154.552L93.4475 7.14635L263.657 7.14635L348.762 154.552L263.657 301.958L93.4475 301.958L8.34258 154.552Z"
    fill="white"
    stroke="#EFEFEF"
    stroke-width="14"
  />
  <use xlinkHref="/public/Ionic.png" textAnchor="middle" />
  <text x="178.5" y="154.5" font-size="24" text-anchor="middle" alignment-baseline="middle">Polygon</text>
</svg>
{/* second hex*/}
<svg
  className="polygon-1"
  width="357"
  height="309"
  viewBox="0 0 357 309"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{top:"7rem",left:"-3.7rem"}}
>
  <path
    d="M8.34258 154.552L93.4475 7.14635L263.657 7.14635L348.762 154.552L263.657 301.958L93.4475 301.958L8.34258 154.552Z"
    fill="white"
    stroke="#EFEFEF"
    stroke-width="14"
  />
</svg>
<svg
  className="polygon-1"
  width="357"
  height="309"
  viewBox="0 0 357 309"
  fill="red"
  xmlns="http://www.w3.org/2000/svg"
  style={{left:"-7.5rem"}}
>
  <path
    d="M8.34258 154.552L93.4475 7.14635L263.657 7.14635L348.762 154.552L263.657 301.958L93.4475 301.958L8.34258 154.552Z"
    fill="white"
    stroke="#EFEFEF"
    stroke-width="14"
  />

</svg>

      

      </div>
    </>
  );
};

export default Hexagon;
