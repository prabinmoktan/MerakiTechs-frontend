import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import product from "../../public/product.jpg";
import lab from "../../public/lab.png";
import ClickCollect from "../../public/ClickCollect.png";
import GoogleCode from "../../public/GoogleCode.png";
import Clinic from "../../public/Clinic.png";

const Products = () => {
  return (
    <>

      <Typography variant="h6" style={{ marginTop: "5rem",marginLeft:"3rem" }}>
        Products and services
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop:"3rem",marginBottom:"5rem" }}>
        <Image
          src={product}
          alt="logo"
          width={500}
          height={250}
          style={{ marginTop: "3rem",marginLeft:"5rem" }}
        />
        <Grid
          style={{
            width: "40%",
            marginRight: "3rem",
            background: "#DFEFF0",
            borderRadius: "10px ",
          }}
          container
          columnGap={8}
          rowGap={2}
        >
          <Grid
            item
            xs={2}
            md={4}
            height={140}
            style={{ marginLeft: "2.5rem" }}
            className="products-logo"
          >
            <Image src={lab} alt="logo" width={60} height={60} />
            <Typography sx={{ fontWeight: "bold" }}>LAB</Typography>
            <Typography variant="caption" style={{ fontSize: "10px" }}>
              we delve deeper into the heart of our work, pushing boundaries,
              and exploring new horizons.
            </Typography>
          </Grid>
          <Grid item xs={2} md={4} height={140} className="products-logo">
            <Image src={ClickCollect} alt="logo" width={60} height={60} />
            <Typography sx={{ fontWeight: "bold" }}>ECOMMERCE</Typography>
            <Typography variant="caption" style={{ fontSize: "10px" }}>
              we delve deeper into the heart of our work, pushing boundaries,
              and exploring new horizons.
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            md={4}
            height={140}
            style={{ marginLeft: "2.5rem",marginTop:"2rem"}}
            className="products-logo"
          >
            <Image src={Clinic} alt="logo" width={60} height={60} />
            <Typography sx={{ fontWeight: "bold" }}>HEALTH CARE</Typography>
            <Typography variant="caption" style={{ fontSize: "10px" }}>
              we delve deeper into the heart of our work, pushing boundaries,
              and exploring new horizons.
            </Typography>
          </Grid>
          <Grid item xs={2} md={4} height={140} className="products-logo" style={{marginTop:"2rem",marginBottom:"2rem"}}>
            <Image src={GoogleCode} alt="logo" width={60} height={60} />
            <Typography sx={{ fontWeight: "bold" }}>WEB DEVELOPMENT</Typography>
            <Typography variant="caption" style={{ fontSize: "10px" }}>
              we delve deeper into the heart of our work, pushing boundaries,
              and exploring new horizons.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Products;
