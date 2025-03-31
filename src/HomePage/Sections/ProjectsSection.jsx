import '../CSS/projectsSection.scss'

//Images
import basketballWebsite1 from '../../assets/images/BasketballWebsite/1.webp'
import basketballWebsite2 from '../../assets/images/BasketballWebsite/2.webp'
import basketballWebsite3 from '../../assets/images/BasketballWebsite/3.webp'
import basketballWebsite4 from '../../assets/images/BasketballWebsite/4.webp'
import basketballWebsite5 from '../../assets/images/BasketballWebsite/5.webp'

import BCCopenhagen1 from '../../assets/images/BCCopenhagenApp/1.webp'
import BCCopenhagen2 from '../../assets/images/BCCopenhagenApp/2.webp'
import BCCopenhagen3 from '../../assets/images/BCCopenhagenApp/3.webp'
import BCCopenhagen4 from '../../assets/images/BCCopenhagenApp/4.webp'
//

import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const projects = [
  {
    headline: 'Basketball Website',
    description: 'We created a website for BC Copenhagen, a professional basketball team based in Denmark, using WordPress and its various plugins. Users have the opportunity to explore upcoming games, discover new stories, and browse through their merchandise store. This approach not only helps their community but also attracts new sponsors to join in.',
    challenges: 'Our main challenge was to design a website that serves sponsors effectively while also informing users about games and related content. We aimed to create a platform where sponsors are easily noticeable, which in turn encourages new sponsors to get involved.',
    solution: 'Our initial step was to develop a user-friendly website to attract higher traffic. This is because a larger user base translates to greater potential sponsorship. Additionally, we established a dedicated Sponsors page offering a clear, comprehensive outline of various sponsor categories and their capabilities.',
    tags: ['WordPress', 'WooCommerce'],
    imgs: [basketballWebsite2, basketballWebsite4, basketballWebsite1, basketballWebsite3, basketballWebsite5],
    pathname: "/basketball-website",
    href: 'https://bccopenhagen.com',
    nextImage: BCCopenhagen1,
    nextLink: "/bc-copenhagen-app",
    nextIndex: 1
  },
  {
    headline: 'BC Copenhagen App',
    description: 'We have developed a custom app for BC Copenhagen, a professional basketball team in Denmark. Utilizing Glide, a no-code building platform, along with a touch of CSS, made it possible to finish the app within 3 weeks. Within the app you can see upcoming games spanning the entire league, watch highlights featuring your favorite player and much more.',
    challenges: "The main challenge revolved around boosting the app's popularity. Our goal was to generate traffic, a factor that would not only entice fresh sponsors but also attract new fans. This was important as the team aimed to enhance their engagement with the audience.",
    solution: 'We introduced a competition feature that allows the team to effortlessly organize small contests during games, giving fans the chance to win sponsor-provided gifts. Additionally, we developed a dynamically updated page that displays real-time information about ongoing league games. This user-friendly interface attracted fans not only from the team itself but also from other teams. Consequently, our app stands out uniquely among others in the league.',
    tags: ['Glide'],
    imgs: [BCCopenhagen1, BCCopenhagen2, BCCopenhagen3, BCCopenhagen4, BCCopenhagen1],
    pathname: "/bc-copenhagen-app",
    href: 'https://bc-copenhagen-qof2.glideapp.io',
    nextImage: basketballWebsite2,
    nextLink: '/basketball-website',
    nextIndex: 0
  }
]

export const ProjectsSection = () => {
  const projectShowcaseRefs = useRef(new Array())
  const [cursorClass, setCursorClass] = useState([]);
  
  const headlineDivRef = useRef(null)

  useEffect(() => {
    if (cursorClass != '') {
      document.querySelector('.cursorCircle').className="cursorCircle"
      cursorClass.forEach(specificClass => {        
        document.querySelector('.cursorCircle').classList.add(specificClass)
      });
    }
  }, [cursorClass])

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      gsap.to(headlineDivRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.,
        scrollTrigger: {
          trigger: headlineDivRef.current,
          start: 'top 70%'
        }
      })

      projectShowcaseRefs.current.map((ref) => {
        gsap.to(ref, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref,
            start: 'top 70%'
          }
        })
      })
    }) 

    return () => {
      ctx.revert();
    }
  }, [headlineDivRef])

  return (
    <>
     <div id='projects-section' className="spacing-div">
      <span className="lowered-text-about">Our work</span>
      <h1 className="huge-headline headline-div" ref={headlineDivRef}>
        Check out our previous work, and get inspired for your own!
      </h1>

      <div className='projects-overall'>
        {
          projects.map((project, index) => (
            <Link to={project.pathname} state={{projects: projects, index: index}} key={project.description} onClick={() => setCursorClass(['cursor-no-svg'])} >          
              <div className='project-showcase-div' ref={(element) => projectShowcaseRefs.current.push(element)}>
                <div className='img-div' onMouseEnter={() => setCursorClass(['enlarge-cursor', 'cursor-right-up-arrow-svg'])} onMouseLeave={() => setCursorClass(['cursor-no-svg'])}>
                  <img src={project.imgs[0]} alt="Project image"/>
                </div>
                <h2 className='sub-headline'>{project.headline}</h2>
                
                <div className='tags-outer-div'>
                  {project.tags.map((tag) => (
                    <div className='tag-div' key={tag}>
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div> 
            </Link>
          ))
        }
      </div>
     </div>
    </>
  )
}
