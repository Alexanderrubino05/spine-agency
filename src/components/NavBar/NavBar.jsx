import { useEffect, useRef, useState } from "react";
import { NavBarItem } from "./NavBarItem.jsx"
import './navBar.scss'
import { Link } from "react-router-dom";
import TabletNavBar from './TabletNavBar.jsx'

export const NavBar = () => {
  const navBar = useRef(null)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Scroll Position with Nav Bar:
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos > 0 && prevScrollPos < currentScrollPos ? false : true);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, visible])
  
  return (
    <>
      <nav id='full-nav-bar'>
        <NavBarItem name="Services" toId={'all-services-div'} containerId={'full-nav-bar'}/>
        <NavBarItem name="About" toId={'about-section-div'} containerId={'full-nav-bar'}/>
        <NavBarItem name="Projects" toId={'projects-section'} containerId={'full-nav-bar'}/>
        <NavBarItem name="Process" toId={'progress-section'} containerId={'full-nav-bar'}/>
        <NavBarItem name="Contact" toId={'contact-session'} containerId={'full-nav-bar'}/>
      </nav>

      <div id="navBar" ref={navBar} style={{top: visible ? '0' : '-100px' }}>
        <Link id="logo" to="/">Spine</Link>
        
        <div className="wrapper">
          <nav id="innerNavBar">
            <NavBarItem name="Services" toId={'all-services-div'} containerId={'innerNavBar'}/>
            <NavBarItem name="About" toId={'about-section-div'} containerId={'innerNavBar'}/>
            <NavBarItem name="Projects" toId={'projects-section'} containerId={'innerNavBar'}/>
            <NavBarItem name="Process" toId={'progress-section'} containerId={'innerNavBar'}/>
            <NavBarItem name="Contact" toId={'contact-session'} containerId={'innerNavBar'}/>
          </nav>
        </div>

        <div>
          <h1></h1>
        </div>

        <TabletNavBar />
      </div>
    </>
  )
}
