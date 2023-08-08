import React from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import Details from "./section2/Details";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
const Home = () => {
  return (
    <>
      <Header />
      <Details />
      <Resume />
      {/* <Portfolio /> */}
      <Form />
    </>
  );
};

export default Home;
