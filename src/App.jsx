import { Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar } from "./components/index/components.index.js";
import { HomePg, ContactPg } from "./pages/index/pages.index"

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-[10]`}>
            <Navbar />
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/contact" element={ <ContactPg /> } />
      </Routes>
    </>
  );
}

export default App;
