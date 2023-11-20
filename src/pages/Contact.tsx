import TopNavbar from "@/components/TopNavbar";
import SideNavbar from "@/components/SideNavbar";
import React from "react";
import Image from "next/image";
import contact from "../../public/contact.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import Address from "../../public/Address.png";
import Email from "../../public/Email.png";
import Phone from "../../public/Phone.png";
import Facebook from "../../public/Facebook.png";
import Twitt from "../../public/Twit.png";
import Linked from "../../public/Linked.png";




const Contact = () => {
  return (
    <>
      
      <div
        style={{
          height: "85vh",
          // display: "inline-block",
          position: "relative",
          background:"white",
          width:"90vw", 
          marginLeft: "7.5em",
          top:"4.8em",
          // zIndex:"1",
          borderRadius:"10px",
          marginBottom:"2em"
        }}
      >
        
         <div style={{background:"#DFEFF0",height:"150px", width:"90vw",marginTop:"16%",position:"absolute"}}>

        </div>
        <Image
          src={contact}
          alt="contact-image"
          width={300}
          height={400}
          style={{ marginTop: "80px", marginLeft: "800px",position:"absolute" }}
        /> 

     

        

        <div
          style={{
            marginTop: "130px",
            marginLeft: "550px",
            background: "white",
            // border: "1px solid",
            width: "300px",
            position:"absolute",
            textAlign:"center",
            fontFamily: 'Poppins, sans-serif' 
          }}
          className="card-shadow"
        >
          <h2 style={{marginTop:"30px"}}>Contact us</h2>
          <div style={{marginTop:"20px"}}> 

          
          <span className="card-data">
            <Image src={Address} alt="icon" width={20} height={20} />
            <p style={{marginLeft:"20px"}}>ShantiNagar, Kathmandu</p>
          </span>
          <span className="card-data">
            <Image src={Email} alt="icon" width={20} height={20} />
            <p style={{marginLeft:"20px"}}>abc@gmail.com</p>
          </span>
          <span className="card-data">
            <Image src={Phone} alt="icon" width={20} height={20} />
            <p style={{marginLeft:"20px"}}>1234567890</p>
          </span>
          </div>
          <div style={{textAlign:"center", alignItems:"center",marginBottom:"10px", marginTop:"10px"}}>
            <h2>
              OUR SOCIALS 
            </h2>
            <span className="card-data" style={{justifyContent:"space-between", width:"120px",marginLeft:"75px"}}>
            <Image src={Facebook} alt="icon" width={20} height={20} />
            <Image src={Twitt} alt="icon" width={20} height={20} />
            <Image src={Linked} alt="icon" width={20} height={20} /> 
            </span>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Contact;
