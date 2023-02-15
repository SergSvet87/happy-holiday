import { RouterProvider } from "react-router-dom";

import { router } from "./router.js";
import { Loader } from "./components/loader/Loader.jsx";

const App = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
    ></RouterProvider>

    // <div className={styles.wrapper}>
    //   <Header />

    //   <main className={styles.page}>
    //     <Routes>
    //       <Route
    //         path="card/:holiday"
    //         element={<Card />}
    //       />
    //       <Route
    //         path="/"
    //         element={<EmptyCard />}
    //       />

    //       <Route
    //         path="singleCard/:idText/:idImg"
    //         element={<Card />}
    //       />
    //     </Routes>
    //   </main>

    //   <Footer />
    // </div>
  );
};

export default App;
