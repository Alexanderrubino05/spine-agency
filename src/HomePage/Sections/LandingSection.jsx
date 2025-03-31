import { useLayoutEffect, useRef } from "react";
import "../CSS/landingSection.scss";
import { gsap } from "gsap";

const LandingSection = () => {
  const headlineDivRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headlineDivRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.015,
        duration: 1,
        delay: 0.3,
      });
    });

    return () => {
      ctx.revert();
    };
  }, [headlineDivRef]);

  return (
    <>
      <div id="landingSection" className="spacing-div">
        <div ref={headlineDivRef} className="headline-div">
          <h1 className="huge-headline">
            Elevate your brand and digitize your vision
          </h1>
          <h1 className="huge-headline gray-headline">
            see results within a month!
          </h1>
        </div>

        <div className="mouse"></div>
      </div>
    </>
  );
};

export default LandingSection;
