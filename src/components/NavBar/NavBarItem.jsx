import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SplitType from "split-type";

export const NavBarItem = ({ name, toId, containerId }) => {
  const linkRef = useRef(null)

  useLayoutEffect(() => {
    const splitType = new SplitType(linkRef.current)

    const ctx = gsap.context(() => {
      gsap.to(`#${containerId} .char`, {
        y: 0,
        rotate: 0,
        stagger: 0.01,
        duration: 0.2,
        delay: 0.45
      })
    })

    return () => {
      ctx.revert();
      splitType.revert();
    }
  }, [linkRef])

  const closeNavBar = async () => {
    document.getElementById('menu-toggle').classList.toggle('nav-open')
    document.querySelector('#full-nav-bar').style.height = `0vh`
  }

  return (
    <Link className="navBarButton" to="/" state={{sectionId: toId}} onClick={closeNavBar}>
      <div className="text-cover">
        <p className="navBarText" ref={linkRef}>{name}</p>
      </div>
      <div className="navBarUnderline"></div>
    </Link>
  );
};