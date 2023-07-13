import { Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar, Footer } from "./components/index/components.index.js";
import { HomePg, AboutPg, GalleryPg, ContactPg } from "./pages/index/pages.index"

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
        <Route path="/about" element={ <AboutPg /> } />
        <Route path="/gallery" element={<GalleryPg />} />
        <Route path="/contact" element={ <ContactPg /> } />
      </Routes>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-[10]`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
