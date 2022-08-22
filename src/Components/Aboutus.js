import React from "react";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Iframe from "react-iframe";

export default function Aboutus() {
  return (
    <div>
      <Box className="aboutpage">
        <Container>
          <Typography className="aboutcontent">
            <Typography>
              <h3>India Deserve Better</h3>
            </Typography>
            <Button variant="outlined" className="button-51" href="/">
              <Link href="/"> Join Us</Link>
            </Button>
          </Typography>
        </Container>
      </Box>

      <Box className="pt-50 pb-50 aboutsec">
        <Container>
          <Grid container spacing={3} className="">
            <Grid item xs={12} sm={6} md={8}>
              <h3>Who We Are</h3>
              <Typography>
                Professional Party is the platform of choice for students and
                young professionals to participate in and make meaningful
                contribution to political affairs and governance of the country,
                without necessarily being part of a political party.
              </Typography>
              <br />
              <Typography>
                Professional Party has brought some of the best minds from
                diverse academic and professional backgrounds together and
                provided them with a unique opportunity to become a part of the
                election process and influence policy making in India.{" "}
              </Typography>
              <br />
              <Typography>
                {" "}
                Professional Party works with visionary leaders with a proven
                track record. In the process, the group helps them set a
                citizen-centric agenda and partners with them to conceptualize &
                implement the most effective methods of taking it to the public
                and gathering mass support.
              </Typography>

              <h3>Who We Are</h3>
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography><br/>
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
              
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftherapidhire%2F&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></Iframe>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}