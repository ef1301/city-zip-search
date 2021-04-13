import React, { useState } from "react";
import axios from "axios";

const City = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchCities = async () => {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/city/SPRINGFIEL`)
      .then(res => {
        setMessage(null);
        setResults(res.data);
      })
      .catch(err => {
        setResults(null);
        setMessage({
          status: err.response.status,
          text: err.response.statusText
        });
      });
  };

  console.log(results);
  return (
    <>
      <h1>City Search</h1>
      {/* TODO: setup input */}

      <button onClick={fetchCities}>Search</button>
      <br />
      {/* TODO: pretty format loading */}
      {message == null && results == null && <>Loading!</>}
      {/* TODO: pretty format error message */}
      {message != null && results == null && (
        <>
          Something went wrong! <br />
          {message.status}: {message.text}
        </>
      )}

      {results != null && "hello"}
    </>
  );
};

export default City;
