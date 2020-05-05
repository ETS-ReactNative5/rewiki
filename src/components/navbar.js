import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "#FFF",
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(45deg, #680701  6%, #070606 60%)',
    
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    
    padding: "./re1.png",
   
    color: 'red',
  
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [showList, setShowList] = React.useState(false);
  const [showList2, setShowList2] = React.useState(false);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
    <img src={"./rewiki.png"} alt="Title"/>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/main">
          <ListItem button onClick={() => setShowList(!showList)}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Main Story"} />
          </ListItem>
        </Link>
        {showList && (
          <>
            <Divider />
            <List>
              {[
                { name: "Resident Evil Zero", to: "/re0" },
                { name: "Resident Evil ", to: "/re1" },
                { name: "Resident Evil 2", to: "/re2" },
                { name: "Resident Evil 3", to: "/re3" },
                { name: "Resident Evil : Code Veronica", to: "/recvx" },
                { name: "Resident Evil 4", to: "/re4" },
                { name: "Resident Evil 5", to: "/re5" },
                { name: "Resident Evil 6", to: "/re6" },
                { name: "Resident Evil 7", to: "/re7" },
              ].map((text, index) => (
                <Link to={text.to}>
                  <ListItem button key={text.name}>
                   
                    <ListItemText primary={text.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
          </>
        )}

        <Link to="/side">
          <ListItem button onClick={() => setShowList2(!showList2)}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Side Story"} />
          </ListItem>
        </Link>
        {showList2 && (
          <>
            <Divider />
            <List>
              {[
                { name: "Resident Evil Outbreak Files", to: "/reob" },
                { name: "Resident Evil Umbrella Chronicles", to: "/recu" },
                { name: "Resident Evil Operation Raccoon City", to: "/rerc" },
                { name: "Resident Evil Darkside Chronicles", to: "/redc" },
                { name: "Resident Evil Revelations", to: "/rere" },
                { name: "Resident Evil Revalations 2", to: "/rere2" },
                { name: "Resident Evil Umbrella Corps", to: "/reuc" },
              ].map((text, index) => (
                <Link to={text.to}>
                  <ListItem button key={text.name}>
                    
                    <ListItemText primary={text.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
          </>
        )}
        <Link to="/trivia">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Trivia"} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
