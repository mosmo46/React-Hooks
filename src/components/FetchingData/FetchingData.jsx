import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
export default function FetchingData() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("reacthooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const searchInputRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getResults();
  }, []);

  const getResults = async () => {

    setLoading(true);
    try {
        const response = await axios.get(
            `http://hn.algolia.com/api/v1/search?query=${query}`
          );
          setResults(response.data.hits);
              
    } catch (err) {
        setError(err)
    }
    
    setLoading(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getResults();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          ref={searchInputRef}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {results.map((res) => (
            <li key={res.objectID}>
              <a href={res.url}>{res.title}</a>
            </li>
          ))}
        </ul>
      )}

      {error && <div>{error.message}</div>}
    </>
  );
}
