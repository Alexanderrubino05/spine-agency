import { useEffect, useRef } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar.jsx";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedOutlet } from "./Components/AnimatedOutlet";
import {motion} from 'framer-motion'

function App() {
  const customCursor = useRef(null)
  const location = useLocation();

  function changeMousePosition(e) {
    customCursor.current.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, {duration: 500, fill: "forwards" });
  }

  useEffect(() => {
    window.addEventListener('mousemove', changeMousePosition)

    return () => {
      window.removeEventListener('mousemove', changeMousePosition)
    }
  }, [customCursor, location])

  //View
  return (
    <>
      <div>
        {/* Cursor */}
        <div className="cursorCircle cursor-no-svg" ref={customCursor}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>
        </div>

        {/* NavBar  */}
        <NavBar />

        {/* Overall div*/}
        <AnimatePresence mode="wait" initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}>
          <motion.div key={location.pathname}>
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;