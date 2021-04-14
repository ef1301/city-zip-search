import React, { useState } from "react";
import axios from "axios";

const Zipcode = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState(null);

  const updateQuery = e => {
    setQuery(`${e.target.value}`);
  };

  const fetchZipcodes = async () => {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/zip/${query}`)
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

  return (
    <>
      <h1>Zipcode Search</h1>
      {/* TODO: setup input */}
      <input value={query} onChange={updateQuery} />
      <button onClick={fetchZipcodes}>Search</button>
      <br />
      {/* TODO: pretty format loading */}
      {message == null && results == null && <>Loading!</>}

      {message != null && results == null && (
        <>
          {/* TODO: pretty format error message */}
          Something went wrong! <br />
          {message.status}: {message.text}
        </>
      )}

      {/* TODO: map over results and pretty format zipcodes */}
      {results != null && JSON.stringify(results)}
    </>
  );
};

export default Zipcode;
