'use client';
import * as React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Mentorship = () => {

  const [spacing, setSpacing] = React.useState(2);

  return (
    <>
      <Breadcrumb
        pageName="Mentorship"
        description="Career Coaching Services tailored to your needs."
      />

        <Paper>

          <Container maxWidth='xl' sx={{
            // border: '1px solid red'
          }}>
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

          </Typography>    </Container>

      </Paper>
    </>
  );
};

export default Mentorship;
