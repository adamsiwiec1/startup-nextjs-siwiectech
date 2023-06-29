'use client'
import React, { useState } from 'react';
import MentorshipBenefits from "@/components/Mentorship/MentorshipBenefits";
import MentorshipTestimonials from "@/components/Mentorship/MentorshipTestimonials";
import HowCanIHelpYou from "@/components/Mentorship/HowCanIHelpYou";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Typography, Container, Grid, Paper } from "@mui/material";
import Image from 'next/image';

const Mentorship = () => {

  const [spacing, setSpacing] = useState(2);

  return (
    <>
      <Breadcrumb
        pageName="Mentorship"
        description="Our mentorship program aims to enrich your skills, enhance your career growth, and expand your professional network."
      />
      <MentorshipBenefits />
      <MentorshipTestimonials />
      <HowCanIHelpYou
        description="Career Coaching Services tailored to your needs."
      />
      <Paper>
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
      </Paper>
    </>
  );
};

export default Mentorship;
