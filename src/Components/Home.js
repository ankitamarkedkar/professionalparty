import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../Components/Style.css";


export default function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = [
    <Typography className="item" data-value="1">
      <img
        src="images/slider1.jpg"
        alt="Professional Party Slider"
        className="slide-image"
      />
      <Typography className="slide-text slide_style_left">
        <h1>Professional Party</h1>
        <p>Get involved with contribution make yourself proud</p>

        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Join Us</Link>
        </Button>
      </Typography>
    </Typography>,
    <Typography className="item" data-value="2">
      <img
        src="images/slider1.jpg"
        alt="Professional Party Slider"
        className="slide-image"
      />
      <Typography className="slide-text slide_style_left">
        <h1>Professional Party</h1>
        <p>There are many variations of passag Lorem Ipsum available</p>
        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Join Us</Link>
        </Button>
      </Typography>
    </Typography>,
    <Typography className="item" data-value="3">
      <img
        src="images/slider1.jpg"
        alt="Professional Party Slider"
        className="slide-image"
      />
      <Typography className="slide-text slide_style_left">
        <h1>Professional Party</h1>
        <p>There are many variations of passag Lorem Ipsum available</p>
        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Join Us</Link>
        </Button>
      </Typography>
    </Typography>,
  ];
  const responsiveissue = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items1 = [
    <Typography className="item issue" data-value="1">
      <img src="images/issue1.jpg" alt="issue" />

      <Typography className="issuecontent">
        <h3>Unemployment</h3>
        <p>
          There are many variations of passag Lorem Ipsum available, but the
          majority have sfered alteration in some form. There are many
          variations of passag Lorem Ipsum available, but the majority have
          sfered alteration in some form.
        </p>
        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Read More</Link>
        </Button>
      </Typography>
    </Typography>,
    <Typography className="item issue" data-value="2">
      <img src="images/issue2.jpg" alt="issue" />

      <Typography className="issuecontent">
        <h3>Technology</h3>
        <p>
          There are many variations of passag Lorem Ipsum available, but the
          majority have sfered alteration in some form. There are many
          variations of passag Lorem Ipsum available, but the majority have
          sfered alteration in some form.
        </p>
        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Read More</Link>
        </Button>
      </Typography>
    </Typography>,
    <Typography className="item issue" data-value="3">
      <img src="images/issue3.jpg" alt="issue" />

      <Typography className="issuecontent">
        <h3>Unemployment</h3>
        <p>
          There are many variations of passag Lorem Ipsum available, but the
          majority have sfered alteration in some form. There are many
          variations of passag Lorem Ipsum available, but the majority have
          sfered alteration in some form.
        </p>
        <Button variant="outlined" className="button-51" href="/">
          <Link to="/"> Read More</Link>
        </Button>
      </Typography>
    </Typography>,
  ];
  const responsivenews = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
  };
  const items2 = [
    <Typography className="item newstext" data-value="1">
      <Typography className="event-img3">
        <img src="images/banner47.jpg" alt="" />
        <Link className="tb-publish" href="">
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </Link>
      </Typography>
      <Typography className="visual-inner-four">
        <h3 className="blog-title-four">
          <Link href="/">Droupadi Murmu Becomes President</Link>
        </h3>
        <Typography className="blog-meta-four">
          <span className="published3-four">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            11 May, 2016
          </span>
          <span className="published4-four">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
            01 Comment
          </span>
        </Typography>
        <Typography className="blog-content">
         
            Droupadi Murmu took oath as India's 15th President. Chief Justice of
            India NV Ramana administered the oath of office of the President to
            her. Droupadi Murmu is India's 1st tribal President.
          
        </Typography>
        <Typography className="readmore">
          <Link href="/">Read more</Link>
        </Typography>
      </Typography>
    </Typography>,
    <Typography className="item newstext" data-value="1">
      <Typography className="event-img3">
        <img src="images/banner48.jpg" alt="" />
        <Link className="tb-publish" href="">
          <i className="fa fa-file-image-o" aria-hidden="true"></i>
        </Link>
      </Typography>
      <Typography className="visual-inner-four">
        <h3 className="blog-title-four">
          <Link href="/">Babul Supriyo Becomes A Minister Again</Link>
        </h3>
        <Typography className="blog-meta-four">
          <span className="published3-four">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            11 May, 2016
          </span>
          <span className="published4-four">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
            01 Comment
          </span>
        </Typography>
        <Typography className="blog-content">
         
            Babul Supriyo, once a minister in Narendra Modi's union cabinet,
            today became a minister in the West Bengal government of Mamata
            Banerjee. He had joined her party.
         
        </Typography>
        <Typography className="readmore">
          <Link href="/">Read more</Link>
        </Typography>
      </Typography>
    </Typography>,
  ];
  return (
    <Typography>
      
      <Typography className="aliceslider">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000}
          animationDuration={3000}
          animationType="fadeout"
          infinite
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </Typography>

      <Box sx={{ flexGrow: 1 }} className="aboutsection pt-25 pb-25">
        <Container>
          <Grid
            container
            spacing={{ xs: 12, md: 12 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="abouttext">
                <h2>Together We Are Stronger</h2>
                <p>
                  Professional Party is the platform of choice for students and
                  young professionals to participate in and make meaningful
                  contribution to political affairs and governance of the
                  country, without necessarily being part of a political party.
                </p>
              </Typography>{" "}
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
            className="valsection"
          >
            <Grid item xs={12} sm={4} md={4}>
              <Typography className="texticon">
                <img src="images/icon1.png" alt="PPicon" />
                <h4>Campaigns</h4>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form.
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography className="texticon">
                <img src="images/icon2.png" alt="PPicon" />
                <h4>OUR MISSION</h4>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form.
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography className="texticon">
                <img src="images/icon3.png" alt="PPicon" />
                <h4>Election</h4>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="issuelatest">
        <Container>
          <Grid container spacing={{ xs: 12, md: 12 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="abouttext">
                <h2>LATEST ISSUES</h2>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form. There are
                  many variations of passag Lorem Ipsum available, but the
                  majority have sfered alteration in some form.
                </p>
              </Typography>{" "}
            </Grid>
          </Grid>
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items1}
            responsive={responsiveissue}
            controlsStrategy="alternate"
          />
        </Container>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="bannersection pt-50 pb-50">
        <Container>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="volunteer">
                “Let’s see the power to change the world with a manifesto. Share
                your Time
                <br /> & Love to Move Country Forward!”
              </Typography>
              <br />
              <br />
              <Typography className="volunteerbtn">
                <Button variant="outlined" className="button-51" href="/">
                  <Link to="/"> Become A Volunteer</Link>
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="newlatest">
        <Container>
          <Grid container spacing={{ xs: 12, md: 12 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="abouttext">
                <h2>Latest News & Press Releases</h2>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form. There are
                  many variations of passag Lorem Ipsum available, but the
                  majority have sfered alteration in some form.
                </p>
              </Typography>{" "}
            </Grid>
          </Grid>
          <br />
          <br />
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items2}
            responsive={responsivenews}
            controlsStrategy="alternate"
          />
        </Container>
      </Box>
      <Box className="eventbanner pt-50 pb-50">
        <Container>
          <Grid container spacing={{ xs: 12, md: 12 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="abouttext">
                <h2>UpComing Events</h2>
                <p>
                  There are many variations of passag Lorem Ipsum available, but
                  the majority have sfered alteration in some form. There are
                  many variations of passag Lorem Ipsum available, but the
                  majority have sfered alteration in some form.
                </p>
              </Typography>{" "}
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
            className="valsection"
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography className="event-text-img event-mrg2">
                <Typography className="event-img3">
                  <img src="images/event22.jpg" alt="" />
                  <Typography className="event-date">
                    <span className="tb-publish">10</span>
                    <span className="tb-publish2">May</span>
                  </Typography>
                </Typography>
                <Typography className="visual-inner">
                  <h3 className="blog-title">
                    <Link href="/">Presidential Elections 2016</Link>
                  </h3>
                  <Typography className="blog-meta">
                    <span className="published3">
                      <i className="fa fa-clock-o" aria-hidden="true"></i> 08:00
                      am
                    </span>
                    <span className="published4">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      United States
                    </span>
                  </Typography>
                  <Typography className="blog-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </Typography>
                  <Typography className="readmore">
                    <Link href="/">Read more</Link>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography className="event-text-img event-mrg2">
                <Typography className="event-img3">
                  <img src="images/event22.jpg" alt="" />
                  <Typography className="event-date">
                    <span className="tb-publish">10</span>
                    <span className="tb-publish2">May</span>
                  </Typography>
                </Typography>
                <Typography className="visual-inner">
                  <h3 className="blog-title">
                    <Link href="/">Presidential Elections 2016</Link>
                  </h3>
                  <Typography className="blog-meta">
                    <span className="published3">
                      <i className="fa fa-clock-o" aria-hidden="true"></i> 08:00
                      am
                    </span>
                    <span className="published4">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      United States
                    </span>
                  </Typography>
                  <Typography className="blog-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </Typography>
                  <Typography className="readmore">
                    <Link href="/">Read more</Link>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography className="event-text-img event-mrg2">
                <Typography className="event-img3">
                  <img src="images/event22.jpg" alt="" />
                  <Typography className="event-date">
                    <span className="tb-publish">10</span>
                    <span className="tb-publish2">May</span>
                  </Typography>
                </Typography>
                <Typography className="visual-inner">
                  <h3 className="blog-title">
                    <Link href="/">Presidential Elections 2016</Link>
                  </h3>
                  <Typography className="blog-meta">
                    <span className="published3">
                      <i className="fa fa-clock-o" aria-hidden="true"></i> 08:00
                      am
                    </span>
                    <span className="published4">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      United States
                    </span>
                  </Typography>
                  <Typography className="blog-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </Typography>
                  <Typography className="readmore">
                    <Link href="/">Read more</Link>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography className="event-text-img event-mrg2">
                <Typography className="event-img3">
                  <img src="images/event22.jpg" alt="" />
                  <Typography className="event-date">
                    <span className="tb-publish">10</span>
                    <span className="tb-publish2">May</span>
                  </Typography>
                </Typography>
                <Typography className="visual-inner">
                  <h3 className="blog-title">
                    <Link href="/">Presidential Elections 2016</Link>
                  </h3>
                  <Typography className="blog-meta">
                    <span className="published3">
                      <i className="fa fa-clock-o" aria-hidden="true"></i> 08:00
                      am
                    </span>
                    <span className="published4">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      United States
                    </span>
                  </Typography>
                  <Typography className="blog-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </Typography>
                  <Typography className="readmore">
                    <Link href="/">Read more</Link>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Typography>
  );
}