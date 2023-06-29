
'use client'
import React, { useState } from 'react';
// Components
import MentorshipBenefits from "@/components/Mentorship/MentorshipBenefits";
import MentorshipTestimonials from "@/components/Mentorship/MentorshipTestimonials";
import HowCanIHelpYou from "@/components/Mentorship/HowCanIHelpYou";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BigSvg from "@/components/Mentorship/BigSvg"
import SmallSvg from '@/components/Mentorship/SmallSvg';
// MUI
import { Typography, Container, Grid, Paper, Button } from "@mui/material";
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
// Styling 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';



const Mentorship = () => {

  const [spacing, setSpacing] = useState(2);
  const wordSpacing = "0.4rem"
  const offset = 100; // padding for onclick
  
  const handleButtonClick = () => {
    const element = document.getElementById("howWeHelp");
    if (element) {
      window.scroll({
        top: element.offsetTop - offset, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  }
  
  
  return (
    <>
        <Grid container>
        <Grid item xs={12} md={8}>
          <div style={{ paddingLeft: '20%', paddingTop: '5%'}}>
          <Breadcrumb
            pageName="Mentorship"
            description={
              <>
                <span style={{ fontWeight: "bold", color: "grey", wordSpacing: wordSpacing}}>
                Our specialized mentorship is designed to amplify your technical and soft skills, provide strategic career guidance, and broaden your professional network. Empower your life and navigate towards the trajectory of your dreams with us. <br/>
                </span>
              </>
            } 
                  
          />
          </div>
          <div style={{ paddingLeft: '21%', paddingTop: '2.5%', display: 'fkex', justifyContent: 'center'}} >
          <Button variant="contained" endIcon={<FontAwesomeIcon icon={faHandPointDown} />} onClick={handleButtonClick} style={{ marginRight: '20px'}} >
          Learn More
          </Button>
          <Button variant="contained" href="/contact" endIcon={<FontAwesomeIcon icon={faPaperPlane} />} style={{ marginLeft: '20px'}}>
          Reach Out
          </Button>
          </div>

        </Grid>
        <Grid item xs={12} md={4}>
            <BigSvg />
          <SmallSvg />
        </Grid>
      </Grid>

      <MentorshipTestimonials />
      <MentorshipBenefits />
      <div id='howWeHelp'>
        <HowCanIHelpYou />
      </div>
      {/* <Paper>
        <Container maxWidth='xl' sx={{}}>
          <Image
            src="/images/headshot.jpg"
            alt="Description of the image"
            width={500}
            height={300}
          />

          <Typography variant="h3">
            Adam Siwiec
          </Typography>

          <Typography variant="h5">
            Data Engineer and Founder of SiwiecTech
          </Typography>
        </Container>
      </Paper>
      <Paper>
        <Container maxWidth="xl">
          <Typography variant="body1">
            test location
          </Typography>    
        </Container>
      </Paper> */}
    </>
  );
};

export default Mentorship;
// Nice template
//  http://www.themestarz.net/html/lifecoach/index2.html#