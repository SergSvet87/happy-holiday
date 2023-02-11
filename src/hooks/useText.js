import axios from 'axios';
import { useEffect, useState } from 'react';

import { URI_API } from '../const/const.js';

export const useText = (holiday) => {
  const [text, setText] = useState('Выберите повод для поздравления!');

  useEffect(() => {
    if (!holiday) return;

    axios.get(`${URI_API}text/${holiday}`)
      .then(({data}) => {
        if (data.text) {
          setText(data.text);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [holiday])

  return [text];
}
