import "../CSS/aboutSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4, aboutImage5];
  const images2 = [aboutImage10, aboutImage8, aboutImage7, aboutImage9, aboutImage6];

  const firstImagesDiv = useRef(null);
  const secondImagesDiv = useRef(null);
  const headlineDivRef = useRef(null)
  
  useLayoutEffect(() => {    
    const firstImagesDivRef = firstImagesDiv.current;
    const secondImagesDivRef = secondImagesDiv.current;
    
    const ctx = gsap.context(() => {
      gsap.to(firstImagesDivRef, {
        x: -firstImagesDivRef.offsetWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: firstImagesDivRef,
          start: "top bottom",
          end: "top top",
          scrub: 4,
        },
      });
  
      gsap.fromTo(secondImagesDivRef, {x: -secondImagesDivRef.offsetWidth }, {
        x: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: secondImagesDivRef,
          start: "top 80%",
          end: "top top",
          scrub: 4,
        },
      });
  
      gsap.to(headlineDivRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.,
        scrollTrigger: {
          trigger: headlineDivRef.current,
          start: 'top 70%'
        }
      })
    })

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <>
      <div id="about-section-div" className="spacing-div">
        <span className="lowered-text-about">We are few</span>
        <h1 className="huge-headline headline-div" ref={headlineDivRef}>
          Just a couple of friends enjoiyng creating digital products.
        </h1>

        <h3 className="body-text">
          Having been friends for years, we share a passion for crafting innovative digital products. Each of us brings our unique expertise to the table, but we always collaborate closely as a team. Navigating the intricate journey of product design and development can be a real puzzle, involving numerous people and stages. However, we thrive on the challenge and stay up-to-date with the latest tech to ensure our projects can scale effectively when the time comes.
        </h3>

        <div id="about-images-outerdiv">
          <div className="about-images-div" ref={firstImagesDiv}>
            {images.map((image, index) => (
              <img key={index} src={image} className="about-image" alt='image' />
            ))}
          </div>

          <div className="about-images-div" ref={secondImagesDiv}>
            {images2.map((image, index) => (    
              <img key={index} src={image} className="about-image" alt='image' />              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


//Images
import aboutImage1 from '../../assets/images/About/1.webp'
import aboutImage2 from '../../assets/images/About/2.webp'
import aboutImage3 from '../../assets/images/About/3.webp'
import aboutImage4 from '../../assets/images/About/4.webp'
import aboutImage5 from '../../assets/images/About/5.webp'
import aboutImage6 from '../../assets/images/About/6.webp'
import aboutImage7 from '../../assets/images/About/7.webp'
import aboutImage8 from '../../assets/images/About/8.webp'
import aboutImage9 from '../../assets/images/About/9.webp'
import aboutImage10 from '../../assets/images/About/10.webp'