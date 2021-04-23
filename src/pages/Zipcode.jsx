import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Zipcode = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState(null);

  const updateQuery = e => {
    setQuery(`${e.target.value}`);
  };

  const submitForm = e => {
    e.preventDefault();
    fetchZipcodes();
  }

  const fetchZipcodes = async () => {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/zip/${query}`)
      .then(res => {
        setMessage(null);
        setResults(res.data);
        console.log(res.data);
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
      <form onSubmit={submitForm} style={{width:"90vw", margin: "5vh auto 0 auto"}}>
        <h1>Zipcode Search</h1>
        {/* TODO: setup input */}
        <input value={query} onChange={updateQuery} />
        <input type="submit" value="Submit"></input>
      </form>
      <br />

      <div id="zip-results" style={{width:"90vw", margin: "5vh auto", display:"flex", flexFlow: "column wrap"}}>
      {/* TODO: pretty format loading */}
      {message == null && results == null && (
        <Card>
          <Card.Body>
            Search a Zip Code!
          </Card.Body>
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
      {results != null && results.map(item => 
        <Card>
          <Card.Header>{item.City}, {item.State}</Card.Header>
          <Card.Body>
              <li>State: {item.State}</li>
              <li>Location: ({item.Lat}, {item.Long})</li>
              <li>Population (estimated): {item.EstimatedPopulation}</li>
              <li>Total Wages: {item.TotalWages}</li>
          </Card.Body>
        </Card>)}
        </div>
      </>
  );
};

export default Zipcode;
