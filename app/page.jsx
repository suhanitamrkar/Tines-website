import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

import Mission from "./Components/Mission";
import Coursal from "./Components/Coursal";
import Companyslogo from "./Components/Companyslogo";
import Ourvalue from "./Components/Ourvalue";
import Joinourteam from "./Components/Joinourteam";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Mission />
      <Coursal />
      <Companyslogo />
      <Ourvalue />
      <Joinourteam />
      <Footer />
    </div>
  );
};

export default page;
