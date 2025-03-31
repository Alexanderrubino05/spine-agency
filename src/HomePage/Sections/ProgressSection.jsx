import { useLayoutEffect, useRef } from 'react'
import '../CSS/progressSection.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ProgressSections = [
  {
    headline: 'Discover',
    description: 'In the discovery phase, we gather information about your business, your goals, and your target audience. We conduct research to learn more about your industry, your competition, and your unique value proposition. We also work with you to determine your goals for the project, such as increasing leads, improving user experience, or driving online sales. By getting to know your business and target audience intimately, we can develop a strategy that meets your needs and delivers results.',
    index: 1,
  },
  {
    headline: 'Design',
    description: 'In the design phase, we bring your vision to life. We either use some of your designs, or we help create a design from scratch. Based on the insights we gained in the discovery phase, we translate our ideas into visual concepts and design a user experience that conveys your message to your audience. We also design a user experience that meets the needs of your target audience and supports your business goals.',
    index: 2,
  },
  {
    headline: 'Develop',
    description: 'Once the design is approved, our team of experienced developers brings it to life. Using modern frameworks and technologies, we create a responsive, fast and functional website or app that meets the needs of your business. We also optimize your product for search engines and integrate it with any necessary third-party tools or platforms. Throughout the development process, we perform thorough testing to ensure that your website works perfectly on all devices and browsers.',
    index: 3,
  },
  {
    headline: 'Improve',
    description: 'Launching your website is just the beginning. To ensure lasting success, we work with you to collect user feedback, track performance, and make layout improvements over time. This includes monitoring the product analytics to identify areas for improvement, conducting user testing to gather feedback on the user experience, and updating your website content and features as needed. By continuously optimizing your website, we help you stay ahead of the competition and achieve your business goals.',
    index: 4,
  },
]

export const ProgressSection = () => {
  const svgContainerRefs = useRef(new Array)
  const textDivRefs = useRef(new Array)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      svgContainerRefs.current.forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref,
          start: 'center bottom',
          onEnter: () => ref.classList.add('animate-circle')
        })
      });

      textDivRefs.current.forEach((ref) => {
        gsap.to(ref, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref,
            start: 'center bottom'
          }
        })
      });
    })

    return () => {
      ctx.revert();
    }
  }, [svgContainerRefs])

  return (
    <>
      <div id="progress-section" className="spacing-div">
        {
          ProgressSections.map((progress) => (
            <section className='section' key={progress.index}>
              <div className='svg-container' ref={(element) => svgContainerRefs.current.push(element)}>
                <div className='svg-circle-container'>
                  <svg>
                    <circle cx="50%" cy="50%" r="75" />
                  </svg>
                  <h1 className='progress-number'>{progress.index}</h1>
                </div>
                <div className='vertical-divider'></div>
              </div>

              <div className='progress-text-div' ref={(element) => textDivRefs.current.push(element)}>
                <h1 className='huge-headline'>{progress.headline}</h1>
                <p>{progress.description}</p>
              </div>
            </section>
          ))
        }
      </div>
    </>
  )
}
