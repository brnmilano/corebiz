import DehazeIcon from "@mui/icons-material/Dehaze";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem classes={{ root: styles.listItem }} disablePadding>
          <Link to="/espera">
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineIcon className={styles.iconUser} />
              </ListItemIcon>
              <ListItemText primary="Minha conta" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styles.container}>
      <React.Fragment>
        <IconButton
          classes={{ root: styles.button }}
          onClick={toggleDrawer("left", true)}
        >
          <DehazeIcon className={styles.menuIcon} />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
