import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../Components/Style.css";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <div>
      <Box className="footer pt-50 pb-50">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography className="footerhead">About Party</Typography>
              <Typography className="para">
                There are many variations of passag Lorem Ipsum available, but
                the majority have sfered alteration in some form. There are many
                variations of passag Lorem Ipsum available, but the majority
                have sfered alteration in some form.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography className="footerhead">Useful Links</Typography>

              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Home
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  About Us
                </Link>
              </Typography>

              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Key Issue
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Engage With Us
                </Link>
              </Typography>

              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Video Gallery
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Image Gallery
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Press Release
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography className="footerhead">Useful Links</Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Terms & Conditions
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Privacy Policy
                </Link>
              </Typography>
              <Typography className="otherlink">
                <Link href="">
                  <span className="fa fa-angle-double-right" />
                  Contact Us
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className="footerhead">Quick Contact Info</Typography>
              <Typography className="iconfooter">
                <span>
                  <i className="fa fa-map-marker"></i>
                </span>
                Office Address
              </Typography>
              <Typography className="footadd">
                51, Electronic Complex, Pardesipura, Indore, Madhya Pradesh
                452007
              </Typography>

              <Typography className="iconfooter">
                <span>
                  <i className="fa fa-phone"></i>
                </span>
                Phone
              </Typography>
              <Typography className="footadd">
                <Link href="telto:1234567890">1234567890</Link>
              </Typography>
              <Typography className="iconfooter">
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                Email
              </Typography>
              <Typography className="footadd">
                <Link href="mailto:info@professionalparty.com">
                  info@professionalparty.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box className="copyrightfoot">
          <Grid container >
          <Grid item xs={12} md={12}>
             

              <Typography >
               
                 
                Copyright 2022, All Right Reserved <Link href="">Professional Party
                </Link>
              </Typography>
             
            </Grid>
          </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}