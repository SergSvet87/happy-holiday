import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";

import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";
import { HolidaysContextProvider } from "./context/holidaysContext";

import styles from "./App.module.css";

const App = () => {
  return (
    <HolidaysContextProvider>
      <div className={styles.wrapper}>
        <Header />

        <ImgContextProvider>
          <main className={styles.page}>
            <TextContextProvider>
              <Card />
            </TextContextProvider>
          </main>
        </ImgContextProvider>

        <Footer />
      </div>
    </HolidaysContextProvider>
  );
};

export default App;
