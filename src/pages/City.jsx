import React, { useState } from "react";

const City = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState("");

  return (
    <>
      <h1>City Search</h1>
      {/* TODO: setup input */}

      {/* TODO: pretty format loading */}
      {message === "" && results == null && <>Loading!</>}
      {/* TODO: pretty format error message */}
      {message !== "" && results == null && (
        <>Something went wrong: {message}</>
      )}
      {results != null && results.map(result => <p>"hello"</p>)}
    </>
  );
};

export default City;
