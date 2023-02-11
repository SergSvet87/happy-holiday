import { createContext, useState } from 'react';

import { useFetch } from '../hooks/useFetch.js';
import { URI_API } from '../const/const.js';

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {

  const [holiday, setHoliday] = useState("");
  const [holidays] = useFetch(URI_API);

  const changeHolidayText = (title) => {
    setHoliday(title);
  };

  return (
    <holidaysContext.Provider value={{ holidays, holiday, changeHolidayText }} >
      {children}
    </holidaysContext.Provider>
  )
}