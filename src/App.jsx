// import { Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar } from "./components/index/components.index.js";

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
    </>
  );
}

export default App;
