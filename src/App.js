import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.page}>
        <Card />
      </main>

      <Footer />

    </div>
  );
}

export default App;
