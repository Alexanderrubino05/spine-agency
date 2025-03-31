import { useRef, useState } from 'react'
import './tabletNavBar.scss'
import { gsap } from 'gsap'

const TabletNavBar = () => {
  const menuRef = useRef(null)
  const [showMenu, changeShowMenu] = useState(false)

  const handleMenu = () => {
    const newShowMenu = !menuRef.current.classList.contains('nav-open')
    menuRef.current.classList.toggle('nav-open')
    document.querySelector('#full-nav-bar').style.height = `${newShowMenu ? 100 : 0}vh`;

    if ( newShowMenu ) {
      gsap.fromTo(`#full-nav-bar .char`, { yPercent: 100, rotate: 30 }, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        stagger: 0.01,
        duration: 0.2,
        delay: 0.75
      })
    }
    else {
      gsap.fromTo(`#full-nav-bar .char`, { opacity: 1 }, {
        opacity: 0,
        duration: 0.2,
      })    
    }

    changeShowMenu(newShowMenu);
  }

  return (
    <>
      <div className="hamburger-menu">
        <div className="container">
          <a id="menu-toggle" className="menu-toggle" ref={menuRef} onClick={handleMenu}>
            <span className="menu-toggle-bar menu-toggle-bar--top"></span>
            <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
            <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
          </a>
        </div>
      </div>
    </>
  )
}

export default TabletNavBar