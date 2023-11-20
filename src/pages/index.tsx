import { Inter } from "next/font/google";
import { Button, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import boy from "../../public/boy.png";
import product from "../../public/product.jpg";
import { useState } from "react";
import Products from "@/components/Products";
import Hexagon from "@/components/Hexagon";
import Client from "@/components/Client";
import Testimonial from "@/components/Testimonial";
import Insights from '@/components/Insights';

export default function Home() {
  const [scroll, setScroll] = useState(false);

  return (
    <>
   
      <div
        style={{
          height: "calc(100vh - 10px)",
          background: "white",
          width: "90vw",
          // paddingTop:"2rem",
          // top: "2.8em",
          // marginTop:"2rem",
          marginLeft: "7.5em",
          borderRadius: "10px",
          color: "#191E38",
          overflow: "auto",
          // overflowY : "hidden",
         scrollbarWidth:"none",
         msOverflowStyle:"none",
         
          zIndex:"0",
          // position: "absolute",
        }}
       className="body"
      >
        <div
          style={{
            // height: "85vh",
            // height: "calc(100vh - 50px)",
            display: "flex",
            justifyContent:"space-evenly",
            // position: "relative",
            // background: "white",
            // width: "90vw",
            // marginLeft: "7.5em",
            // top: "4.8em",
            marginTop:"5rem",
            // zIndex: "0",
            // borderRadius: "10px",
            // marginBottom: "2em",
            color: "#191E38",
            overflowY: "hidden",
          }}
        >
          <Grid>
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", color: "#191E38" }}
            >
              HUMANIZING
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              
              DATA &
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
              TECHNOLOGY
            </Typography>
            <Typography width={350} variant="subtitle1" gutterBottom>
              WE HAVE A GREAT TEAM OF EXPERIENCE AND TECH-LOVING PEOPLE
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#223A75",
                borderRadius: "12px 12px 12px 12px",
              }}
            >
              <ChevronRightIcon
                sx={{
                  background: "#4A76E0",
                  borderRadius: "12px 12px 12px 12px",
                }}
              />
              <Typography
                sx={{ marginLeft: "5px", marginRight: "5px", fontSize: "11px" }}
              >
                Get Started Now
              </Typography>
              <ChevronRightIcon
                sx={{
                  background: "#4A76E0",
                  borderRadius: "12px 12px 12px 12px",
                  // marginLeft: "5px",
                }}
              />
            </Button>
          </Grid>
          <Grid
            style={{
              display: "grid",
              placeItems: "center",
              // marginLeft: "9rem",
            }}
          >
            <Image src={boy} alt="company" width={250} height={300} style={{marginTop:"3rem"}}/>
            <Typography variant="caption" width={300} style={{marginTop:"3rem"}}>
              Developing software isnt a big deal nowadays. what is important is
              to develop secure,fast and effiecient software that caters to the
              needs of real-life scenarios
            </Typography>
          </Grid>
        </div>

        
        <Products/>
        <Hexagon/>
        <Client/>
        <Insights/>
        
        <Testimonial />
      </div>
      
    </>
  );
}
