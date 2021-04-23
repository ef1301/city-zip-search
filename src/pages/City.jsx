import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const City = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState(null);

  const updateQuery = (e) => {
    setQuery(`${e.target.value.toUpperCase()}`);
  };

  const fetchCities = async () => {
    axios
      .get(`https://ctp-zip-api.herokuapp.com/city/${query}`)
      .then((res) => {
        setMessage(null);
        setResults(res.data);
      })
      .catch((err) => {
        setResults(null);
        setMessage({
          status: err.response.status,
          text: err.response.statusText,
        });
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetchCities();
  };

  return (
    <>
      <h1>City Search</h1>
      {/* TODO: setup input */}
      <form onSubmit={submitForm}>
      <input value={query} onChange={updateQuery} />
      <input type="submit" value="search"></input>
      </form>
      <br />

      <div
        id="city-results"
        style={{
          width: "90vw",
          margin: "5vh auto",
          display: "flex",
          flexFlow: "column wrap",
        }}
      >
        {message == null && results == null && (
          <Card>
            <Card.Body>Search a City!</Card.Body>
          </Card>
        )}

        {message != null && results == null && (
          <Card>
            {/* TODO: pretty format error message */}
            <Card.Header>Something went wrong!</Card.Header>
            <Card.Body>
              {message.status}: {message.text}
            </Card.Body>
          </Card>
        )}

        {/* TODO: map over results and pretty format zipcodes */}
        {results != null && (
          <Card style={{ width: "80rem" }}>
            <Card.Header>
              All Zip Codes matching <b>{query}</b>:
            </Card.Header>
            <Card.Body>
              {results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

export default City;
