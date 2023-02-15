import { useRouteError } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './error-page.css';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section id="error-page" className="page error-page">
      <h3 className="title-h3">Oops!</h3>
      <p className="error-page__text">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
        <i
          style={{
            marginTop: '15px',
            display: 'block',
            fontSize: '38px',
            color: '#fd920f',
          }}
          className="bx bxs-down-arrow-alt"></i>
        <NavLink to='/'>HOME</NavLink>
      </p>
    </section>
  );
};
