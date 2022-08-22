import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "@mui/material";

export default function Sidebar() {
  return (
    <div>
      <List className="social">
        <ListItem className="listitem">
          <Link class="fa fa-facebook" href="#">
            <span>Facebook</span>
          </Link>
        </ListItem>
        <ListItem className="listitem">
          <Link class="fa fa-instagram" href="#">
            <span>Instagram</span>
          </Link>
        </ListItem>
        <ListItem className="listitem">
          <Link class="fa fa-twitter" href="#">
            <span>Twitter</span>
          </Link>
        </ListItem>
        <ListItem className="listitem">
          <Link class="fa fa-linkedin" href="#">
            <span>Linkedin</span>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}