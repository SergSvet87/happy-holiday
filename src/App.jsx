import { Route, Routes } from "react-router-dom";

import { Card } from "./components/card/Card";
import { EmptyCard } from "./components/emptyCard/EmptyCard.jsx";
import { Layout } from "./components/layout/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<EmptyCard />}
        />
        <Route
          path="card/:holiday"
          element={<Card />}
        />
        {/* <Route
          path="singleCard/:idText/:idImg"
          element={<Card />}
        /> */}
      </Route>
    </Routes>
  );
};

export default App;
