
import { useEffect, useState } from 'react';
import axios from 'axios';

import { URI_API } from '../const/const.js';

export const useHolidays = () => {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    axios
      .get(URI_API)
      // .then((response) => {
      //   if (response.status !== 200) {
      //     throw new Error(response.status);
      //   }
      // })
      .then(({ data }) => setHolidays(data))
      .catch((error) => {
        console.error(error);
      });
  }, [setHolidays]);


  return [holidays];
}
