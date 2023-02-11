import axios from 'axios';
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    if (!url) return;

    axios.get(url)
      .then(({ data }) => {
        if (data) {
          setData(data);
        } else {
          throw new Error(data.status)
        }
      })
      .catch((err) => {
        setError(err)
      });
  }, [url])

  return [data, error]
}
