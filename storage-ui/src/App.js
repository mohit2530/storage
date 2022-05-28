import React from "react";
import Banner from "./containers/Banner/Banner";
import globalConstants from "./util/constants";

const App = () => {
  const bannerText = globalConstants.header.bannerText;
  const avatarlogotext = globalConstants.header.avatarlogotext;
  return (
    <>
      <Banner bannerText={bannerText} avatarlogotext={avatarlogotext} />
    </>
  );
};

export default App;
