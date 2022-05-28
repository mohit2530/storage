import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerText: {
    fontSize: "large",
    // color: theme.palette.warning.dark,
    color: ({ colour }) => colour,
  },
}));

const Banner = ({ bannerText, colour }) => {



  const classes = useStyles({ colour });

  return (
    <React.Fragment>
      <Typography className={classes.bannerText}>{bannerText}</Typography>
    </React.Fragment>
  );
};

export default Banner;
