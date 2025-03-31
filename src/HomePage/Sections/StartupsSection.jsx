import { useLayoutEffect, useRef } from 'react'
import '../CSS/startupSection.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from "react-scroll";

export const StartupsSection = () => {
  const overallDiv = useRef(null)
  const leftDiv = useRef(null)
  const textDivsRef = useRef(new Array)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth > 700) {
        ScrollTrigger.create({
          trigger: overallDiv.current,
          start: 'top top',
          end: "bottom center",
          pin: leftDiv.current
        })
      }

      textDivsRef.current.forEach((ref, index) => {
        gsap.to(ref, {
          opacity: 0,
          scale: 0.3,
          backgroundColor: 'black',
          ease: 'power4.in',
          scrollTrigger: {
            trigger: ref,
            start: `top ${20 + (index * 1.5)}%`,
            end: '+=500',
            scrub: 1,
            pin: ref,
          }
        })
      });
    })

    return () => {
      ctx.revert();
    }
  }, [overallDiv])

  return (
    <>
      <div className='startup-section-overall spacing-div' ref={overallDiv}>
        <div className='startup-left-div' ref={leftDiv}>
        <span className="lowered-text-about">Is this you?</span>
          <h1 className='huge-heading'>9 out of 10 startups fail because they can't escape competition</h1>
          <Link className='custom-button' to={'contact-session'} spy={true} smooth={true} duration={1000}> <span className='medium-text'>Contact us to stand out</span> </Link>
        </div>

        <div className='startup-right-div'>
          <div ref={ref => (textDivsRef.current[0] = ref)} className='startup-text-div'> Your Website Lost in the Crowd?</div>
          <div ref={ref => (textDivsRef.current[1] = ref)} className='startup-text-div'>Struggling to Transform Visitors into Devoted Users?</div>
          <div ref={ref => (textDivsRef.current[2] = ref)} className='startup-text-div'>Do Users Love Navigating Your Website or App?</div>
          <div ref={ref => (textDivsRef.current[3] = ref)} className='startup-text-div'>Is Your Online Platform Uniquely Engaging or Forgettable?</div>
          <div ref={ref => (textDivsRef.current[4] = ref)} className='startup-text-div'>Does Your Digital Presence Truly Reflect Your Brand's Essence?</div>
          <div className='startup-text-div'>Crafting Apps and Sites with Impact: Ready to Elevate?</div>
        </div>
      </div>
    </>
  )
}
