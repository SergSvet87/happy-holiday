import axios from 'axios';
import { useEffect, useState } from 'react';

import { URI_API } from '../const/const.js';

export const useImg = (holiday) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!holiday) return;

    axios.get(`${URI_API}text/${holiday}`)
      .then(({ data }) => {
        if (data.idImg) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [holiday])

  return data;
}
