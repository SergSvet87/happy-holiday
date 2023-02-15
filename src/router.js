import { createHashRouter } from 'react-router-dom';

import { Layout } from './components/layout/Layout.jsx';
import { ErrorPage } from './components/error/ErrorPage.jsx';
import { EmptyCard } from './components/emptyCard/EmptyCard.jsx';
import { Card } from './components/card/Card.jsx';
import { NotFoundPage } from './components/not-found/NotFoundPage.jsx';


export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <EmptyCard />,
      },
      {
        path: "card/:holiday",
        element: <Card />,
      },
      {
        path: "singleCard/:idText/:idImage",
        element: <Card />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);