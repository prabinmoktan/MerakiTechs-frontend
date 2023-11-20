import Image from "next/image";
import React, { useEffect, useState } from "react";
import js from "../../public/JS.png";
import { Grid, Paper, Typography } from "@mui/material";
import user from "../../public/user.png";
import people from "../../public/People.png";
import service from "../../public/Service.png";
import javascript from "../../public/JavaScript.png";
import Html5 from "../../public/Html5.png";
import java from "../../public/Java.png";

const Client = () => {
  return (
    <>
      <div className="scrolling-text" style={{marginTop:"5rem"}}>
        <div className="header">
          <span
            style={{
              display: "flex",

              // justifyContent: "center",
              alignItems: "center",
              // width: "6rem",
            }}
          >
            <Image src={js} alt="logo" height={30} width={30} />
            <Typography variant="h6">Node js</Typography>
          </span>
        </div>
        <div
          className="header"
          style={{
            display: "flex",

            justifyContent: "center",
            width: "8rem",
          }}
        >
          <Image src={javascript} alt="logo" height={30} width={30} />
          <Typography variant="h6">Javascript</Typography>
        </div>
        <div
          className="header"
          style={{
            display: "flex",

            justifyContent: "center",
            width: "7rem",
          }}
        >
          <Image src={Html5} alt="logo" height={30} width={30} />
          <Typography variant="h6">HTML 5</Typography>
        </div>

        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "6rem",
          }}
        >
          <Image src={java} alt="logo" height={30} width={30} />
          <Typography variant="h6">Redis</Typography>
        </div>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "6rem",
          }}
        >
          <Typography
            variant="subtitle1"
            color={"white"}
            sx={{
              background: "#223A75",
              width: "80%",
              borderRadius: "15px",
              height: "1.7rem",
            }}
          >
            Web
          </Typography>
        </div>
      </div>
      <div style={{ width: "70%", margin: "auto", marginBottom: "2rem",marginTop:"5rem" }}>
        <Paper elevation={12} sx={{ textAlign: "center", height: "13rem" }}>
          <Typography variant="h5" sx={{ marginTop: "rem", padding: "2rem" }}>
            Our insights
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2rem",
              // marginBottom: "12rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <Typography variant="h3">100</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: ".8rem",
                  marginLeft: ".5em",
                }}
              >
                <Image src={user} alt="logo" width={20} height={20} />
                <Typography variant="caption">clients</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Typography variant="h3">20</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: ".8rem",
                  marginLeft: ".5em",
                }}
              >
                <Image src={people} alt="logo" width={20} height={20} />
                <Typography variant="caption">customer</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Typography variant="h3">400</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: ".8rem",
                  marginLeft: ".5em",
                }}
              >
                <Image src={service} alt="logo" width={20} height={20} />
                <Typography variant="caption">Services</Typography>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Client;
