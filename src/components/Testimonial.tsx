import { Typography } from "@mui/material";
import comma from "../../public/Comma.png";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <div
        style={{
          background: "#DFEFF0",
          height: "60vh",
          borderRadius: "20px",
          width: "80vw",
          margin: "auto",
          marginBottom: "2rem",
          marginTop: "9rem",
          display:"flex",
          flexWrap:"nowrap"
        }}
      >
        <div style={{ width: "20rem",fontSize:"12px"}}>
          <span>
            <Image src={comma} alt="logo" width={20} height={30} />
            <Image src={comma} alt="logo" width={20} height={30} />
          </span>
          <Typography variant="h4" color={"black"}>
            {" "}
            TESTIMONIALS
          </Typography>
          {/* <Typography variant="caption"> */}
          <p style={{width:"100%"}}>
          We are pleased to share testimonials from our valued customers,
            highlighting their positive experiences and satisfaction with the
            service provided by Meraki Tech Company.
          </p>
            
           
          {/* </Typography> */}
        </div>
        <div>
          this space is for image carousel
        </div>
      </div>
    </>
  );
};

export default Testimonial;
