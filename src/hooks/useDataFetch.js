import { useState, useEffect } from "react";

function useDataFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  return data;
}

export default useDataFetch;