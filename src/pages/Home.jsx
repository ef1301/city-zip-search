import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to City-Zipcode Search</h1>
      <Link to="/city">
        <button>City</button>
      </Link>
      <Link to="/zipcode">
        <button>Zipcode</button>
      </Link>
    </>
  );
};

export default Home;
