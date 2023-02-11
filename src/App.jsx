import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';

import styles from './App.module.css';
import { HolidaysContextProvider } from './context/holidaysContext';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <HolidaysContextProvider>
        <Header />
      </HolidaysContextProvider>

      <ImgContextProvider>
        <main className={styles.page}>
          <TextContextProvider>
            <Card />
          </TextContextProvider>
        </main>
      </ImgContextProvider>

      <Footer />

    </div>
  );
}

export default App;
