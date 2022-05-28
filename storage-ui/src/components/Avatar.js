import React from "react";
import { Avatar } from "@material-ui/core";

const Avatar = ({ avatarLogoText }) => {
  const classes = useStyles();

  return (
    <>
      <Avatar>{avatarLogoText}</Avatar>
    </>
  );
};

export default Avatar;
