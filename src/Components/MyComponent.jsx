import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/some_endpoint');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error ? <ErrorPage errorMessage={error} /> : <p>{data}</p>}
      {/* Render other content based on data */}
    </div>
  );
};

export default MyComponent;
