import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../../CSS/ProjectsPages/projectPage.scss'
import { gsap } from 'gsap'
import transition from '../../../transition'
import { Link, useLocation } from 'react-router-dom'

const ProjectPage = () => {
  const location = useLocation();
  if (location.state?.projects == undefined ) {
    return ( <></> )
  }

  const index = location.state?.index
  const projects = location.state?.projects
  const project = projects[index]

  const headlineRefs = useRef(new Array)
  const textDivsRefs = useRef(new Array)
  const imageCoverRefs = useRef(new Array)

  const [cursorClass, setCursorClass] = useState([]);
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
      headlineRefs.current.forEach((ref) => {
        gsap.to(ref, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref,
            start: 'top bottom'
          }
        })
      });

      textDivsRefs.current.forEach((ref) => {
        gsap.to(ref, {
          x: 0,
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ref,
            start: `center bottom`,
          }
        })
      });

      imageCoverRefs.current.forEach((ref) => {
        gsap.to(ref, {
          yPercent: -100,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref,
            start: `top 80%`,
          }
        })
      });
    }) 

    return () => {
      ctx.revert();
    }
  }, [])

  return (
    <>
      <div id='project-page'>
        <div className='cover-img-div'>
          <img className='cover-img' src={project.imgs[0]} loading='lazy' alt='image'/>
          <div className='project-headline-div'>
            <h1 className='huge-headline project-headline' ref={ref => (headlineRefs.current[0] = ref)}>{project.headline}</h1>
          </div>
        </div>

        <div className='project-content-div spacing-div'>
          <div className='project-info-div'>
            <div className='tags-outer-div'>
              {project.tags.map((tag) => (
                <div className='tag-div' key={tag}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>

            <a href={project.href} target="_blank">Visit Website</a>
          </div>
          
          {/* Description */}
          <div className='project-text-div' ref={ref => (textDivsRefs.current[0] = ref)}>
            <span className='buble-text'>Description</span>
            <p className='description-text'>{project.description}</p>
          </div>
          
          <div className='project-img-container'>
            <div className='project-img-cover' ref={ref => (imageCoverRefs.current[0] = ref)}></div>
            <img className='project-img' src={project.imgs[1]} loading='lazy' alt='image'/>
          </div>

          <div className='project-img-container'>
            <div className='project-img-cover' ref={ref => (imageCoverRefs.current[1] = ref)}></div>
            <img className='project-img' src={project.imgs[2]} loading='lazy' alt='image'/>
          </div>

          {/* Challenges */}
          <div className='project-text-div' ref={ref => (textDivsRefs.current[1] = ref)}>
            <span className='buble-text'>Challenges</span>
            <p className='description-text'>{project.challenges}</p>
          </div>
          
          <div className='project-img-container'>
            <div className='project-img-cover' ref={ref => (imageCoverRefs.current[2] = ref)}></div>
            <img className='project-img' src={project.imgs[3]} loading='lazy' alt='image'/>
          </div>
          
          {/* Solution */}
          <div className='project-text-div' ref={ref => (textDivsRefs.current[2] = ref)}>
            <span className='buble-text'>Solution</span>
            <p className='description-text'>{project.solution}</p>
          </div>
          
          <div className='project-img-container'>
            <div className='project-img-cover' ref={ref => (imageCoverRefs.current[3] = ref)}></div>
            <img className='project-img' src={project.imgs[4]} loading='lazy' alt='image'/>
          </div>
        </div>

        <Link to={project.nextLink} state={{projects: projects, index: project.nextIndex}} className='cover-img-div' onMouseEnter={() => setCursorClass(['enlarge-cursor'])} onMouseLeave={() => setCursorClass(['cursor-no-svg'])} onClick={() => setCursorClass(['cursor-no-svg'])}>
          <img className='cover-img' src={project.nextImage} loading='lazy' alt='image'/>
          <div className='project-headline-div'>
            <h1 className='huge-headline project-headline' ref={ref => (headlineRefs.current[1] = ref)}>Next project</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default transition(ProjectPage);