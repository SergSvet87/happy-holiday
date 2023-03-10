import { createContext } from 'react';
import { useSelector } from 'react-redux';

// import { holidaysContext } from './holidaysContext.js';
import { useFetch } from '../hooks/useFetch.js';
import { URI_API } from '../const/const.js';

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {

  const holiday = useSelector(state => state.holidays.holiday);
  // const { holiday } = useContext(holidaysContext);
  const [{ urlImg }] = useFetch(holiday ? `${URI_API}image/${holiday}` : '');

  return (
    <imgContext.Provider value={{ urlImg }} >
      {children}
    </imgContext.Provider>
  )
}