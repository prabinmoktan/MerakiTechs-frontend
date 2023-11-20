import { Grid, Paper, Typography, makeStyles } from "@mui/material";
import ReactNative from "../../public/ReactNative.png";
import Java from "../../public/Java.png";
import Swift from "../../public/Swift.png";
import Kotlin from "../../public/Kotlin.png";
import Google from "../../public/Google.png";
import Instagram from '../../public/Insta.png'
import Biznest from '../../public/Biznest.png'
import Nestle from '../../public/Nestle.png';
import Disney from '../../public/Disney.png';
import Netflix from '../../public/netflix.png'
import Image from "next/image";
import React from "react";

// const useStyles = makeStyles((theme:any) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const Client = () => {
  return (
    <>
      <div className="scrolling-text">
        <div className="header1">
          <span
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Image src={Swift} alt="logo" height={30} width={30} />
            <Typography variant="h6">Swift</Typography>
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
          <Image src={Java} alt="logo" height={30} width={30} />
          <Typography variant="h6">Java</Typography>
        </div>
        <div
          className="header"
          style={{
            display: "flex",

            justifyContent: "center",
            width: "7rem",
          }}
        >
          <Image src={Kotlin} alt="logo" height={30} width={30} />
          <Typography variant="h6">Kotlin</Typography>
        </div>

        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "9rem",
          }}
        >
          <Image src={ReactNative} alt="logo" height={30} width={30} />
          <Typography variant="h6">React Native</Typography>
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
            Mobile
          </Typography>
        </div>
      </div>
      

      <Grid container item spacing={3} marginTop={'3rem'}>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          textAlign={"center"}
          marginTop={'3rem'}
        >
          <div >
            <Typography
              className="stroked-text"
              variant="h2"
              style={{ position: "relative" }}
            >
              OUR
            </Typography>
            <Typography
              variant="h2"
              style={{
                position: "relative",
                marginTop: "-4.5rem",
                marginLeft: "-0.09em",
              }}
              color={"#223A75"}
              fontWeight={"bold"}
            >
              OUR
            </Typography>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Typography
              className="stroked-text"
              variant="h2"
              style={{ position: "relative" }}
            >
              CLIENTS
            </Typography>
            <Typography
              variant="h2"
              style={{
                position: "relative",
                marginTop: "-4.5rem",
                marginLeft: "-0.09em",
              }}
              color={"#223A75"}
              fontWeight={"bold"}
            >
              CLIENTS
            </Typography>
          </div>
          <Typography variant="caption">
            {" "}
            Over 1k+ software business growing wiht Meraki Techs.
          </Typography>
        </Grid>
        

        <Grid container spacing={4} xs={12} md={6} textAlign={"center"}>
          {/* Row 1 */}
          <Grid item xs={6} md={5} >
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Google} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                GOOGLE INC
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={5}>
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Instagram} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                INSTAGRAM
              </Typography>
            </Paper>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={6} md={5}>
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Biznest} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                BIZZNEST BAZAR
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={5}>
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Nestle} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                NESTLE
              </Typography>
            </Paper>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={6} md={5}>
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Disney} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                DISNEY
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={5}>
            <Paper elevation={3} sx={{padding:"1rem"}}>
              <Image src={Netflix} alt="logo" width={40} height={40} />
              <Typography variant="subtitle1" fontWeight={"700"} fontSize={13}>
                NETFLIX
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>

        {/* </div> */}
      </Grid>
    </>
  );
};

export default Client;
