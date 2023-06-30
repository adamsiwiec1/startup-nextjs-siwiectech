import * as React from 'react';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MentorshipTestimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="mx-auto flex flex-col items-left text-left">
          <div className="w-full px-4 md:w-1/2">
            <div className="max-w-[470px] mx-auto">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mentorship Testimonials
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Read what our mentees have to say about the program and the positive impact it has had on their professional development.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-full flex flex-wrap justify-center items-center">
              {/* Card 1 */}
              <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image="/images/mentor/k_long.jpg"
          alt="Keaton Long"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keaton Long
          </Typography>
          <Typography variant="body2" color="text.secondary">
          I'm happy to announce my new role of Data center Operator at Contegix. But more importantly, want to give special thanks to my colleague Anthony Segarra. Who was kind enough to . . .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='https://www.linkedin.com/feed/update/urn:li:activity:7070218503647068160/' size="small" color="primary" target='_blank'>
          SEE ENTIRE POST
        </Button>
      </CardActions>
    </Card>
    {/* Card 2 */}
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image="/images/mentor/ant_s.jpg"
          alt="Anthony Segarra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Anthony Segarra
          </Typography>
          <Typography variant="body2" color="text.secondary">
          I want to give a huge shout out to Adam Siwiec for being the amazing leader that he is! Anyone who spends five minutes with Adam would catch a glimpse of how important it is to him to establish his foothold and footprint in the tech industry. . .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='https://www.linkedin.com/feed/update/urn:li:activity:7024405461583953921/' target='_blank' size="small" color="primary">
          SEE ENTIRE POST
        </Button>
      </CardActions>
    </Card>
    {/* Card 3 */}
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      {/* Card 4 */}
      <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    {/* Card 5 */}
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    {/* Card 6 */}
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipTestimonials;
