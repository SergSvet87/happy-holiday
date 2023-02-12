
import { Route, Routes } from 'react-router';

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";
import { EmptyCard } from './components/emptyCard/EmptyCard.jsx';

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.page}>
        <Routes>
          <Route path='card/:holiday' element={<Card />} />
          <Route path='/' element={<EmptyCard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
