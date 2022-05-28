import { Avatar, makeStyles } from "@material-ui/core";
import BannerText from "../../components/BannerText";
import React from "react";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "1.5rem",
    marginLeft: "1.0rem",
  },
  bannerAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Banner = ({ bannerText, avatarlogotext }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BannerText bannerText={bannerText} colour="gold" />
      <Avatar
        className={classes.bannerAvatar}
        avatarlogotext={avatarlogotext}
      />
    </div>
  );
};

export default Banner;
