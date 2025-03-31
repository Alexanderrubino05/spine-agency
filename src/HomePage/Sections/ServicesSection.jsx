//Images
import wordpressImageMain from '../../assets/images/Services/wordpress-main.webp'
import wordpressImageCloseup from '../../assets/images/Services/wordpress-closeup.webp'
import wordpressImageBehind from '../../assets/images/Services/wordpress-behind.webp'

import appImageMain from '../../assets/images/Services/app-main.webp'
import appImageCloseup from '../../assets/images/Services/app-closeup.webp'
import appImageBehind from '../../assets/images/Services/app-behind.webp'

import advancedImageMain from '../../assets/images/Services/advanced-main.webp'
import advancedImageCloseup from '../../assets/images/Services/advanced-closeup.webp'
import advancedImageBehind from '../../assets/images/Services/advanced-behind.webp'
//

import '../CSS/servicesSection.scss'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from "react-scroll";

const services = [
  {
    headline: "Need a website?",
    description: "Take your online presence to the next level with the boundless power of WordPress. Our web agency specializes in turning your digital dreams into reality by creating WordPress websites that seamlessly blend innovation and user engagement. We're dedicated to helping your brand achieve online success with every project we tackle.",
    tag: "Wordpress / Webflow",
    mainImage: wordpressImageMain,
    secondHeadline: "We are experts",
    secondDescription: "Experience the user-centric elegance of WordPress design as we cater to your audience's desires and needs. Our websites aren't just aesthetically pleasing; they're optimized to thrive in search rankings, giving your brand the visibility it deserves. Content management becomes a breeze, allowing you to focus on your core mission while we handle the technicalities.",
    closeupImage: wordpressImageCloseup,
    behindImage: wordpressImageBehind,
    isReversed: false,
    index: 0,
  },
  {
    headline: "Beatuifull Apps",
    description: "Effortlessly materialize your app visions with Glide and Flutter. Our agency excels in rapid app development, bypassing code for results in weeks. Glide boasts stunning visuals, while Flutterflow enhances functionality, ensuring your app's uniqueness.",
    tag: "Flutterflow / Glide",
    mainImage: appImageMain,
    secondHeadline: "Your ideal match",
    secondDescription: "Confused about choosing between Glide and Flutterflow? We've got you covered. Our expertise helps us tailor the perfect recommendation based on your app's unique needs. Let us guide you toward the platform that aligns seamlessly with your app's vision and goals.",
    closeupImage: appImageCloseup,
    behindImage: appImageBehind,
    isReversed: true,
    index: 1,
  },
  {
    headline: "Advanced Website?",
    description: "Elevate your online presence with advanced solutions like Laravel, Three.js, and React. If your needs are sophisticated, our expertise matches. Craft a standout website that captivates and converts visitors, leveraging the coolest tech trends of the moment to set you apart.",
    tag: "Laravel / Three.js / React...",
    mainImage: advancedImageMain,
    secondHeadline: "Experience 3D Websites",
    secondDescription: "Looking to redefine online engagement? Our agency specializes in creating 3D websites powered by Three.js, immersing your audience in stunning interactive experiences. Whether it's product showcases or unique visual narratives, we transform concepts into captivating 3D reality.",
    closeupImage: advancedImageCloseup,
    behindImage: advancedImageBehind,
    isReversed: false,
    index: 2,
  },
]

export const ServicesSection = () => {
  const descriptionSectionRefs = useRef(new Array())
  const textDivRefs = useRef(new Array())
  const imageRefs = useRef(new Array())

  const [cursorClass, setCursorClass] = useState([]);

  const showServiceDescription = (index) => {
    const descriptionSection = descriptionSectionRefs.current[index]
    const closeUpImage = descriptionSection.querySelector('.service-imgs-div').querySelector('.closeup-service-img')
    const carseatImage = descriptionSection.querySelector('.service-imgs-div').querySelector('.carseat-service-img')

    descriptionSection.style.transform = 'translateX(0%)'
    setTimeout(() => {
      carseatImage.style.transform = 'translateX(0%)'
      carseatImage.style.opacity = '1'

      setTimeout(() => {
        closeUpImage.style.transform = 'translate(0%, -50%)'
        closeUpImage.style.opacity = '1'
      }, 100)
    }, 200)
  }

  const dissmissServiceDescription = (index, reversed) => {
    const descriptionSection = descriptionSectionRefs.current[index]
    const closeUpImage = descriptionSection.querySelector('.service-imgs-div').querySelector('.closeup-service-img')
    const carseatImage = descriptionSection.querySelector('.service-imgs-div').querySelector('.carseat-service-img')

    const translateValue = reversed ? -100 : 100
    //Reverse the dismiss order
    carseatImage.style.transform = `translateX(${translateValue}%)`
    carseatImage.style.opacity = '0'
    setTimeout(() => {
      closeUpImage.style.transform = `translate(${translateValue}%, -50%)`
      closeUpImage.style.opacity = '0'
      
      setTimeout(() => {
        descriptionSection.style.transform = `translateX(${translateValue}%)`
      }, 100)
    }, 200)
  }

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
      textDivRefs.current.map((ref, index) => {
        gsap.to(ref, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref,
            start: 'center bottom'
          }
        })
  
        gsap.to(imageRefs.current[index], {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: imageRefs.current[index],
            start: 'center bottom'
          }
        })
      })
    })

    return () => {
      ctx.revert();
    }
  }, [textDivRefs])

  return (
    <>
    <div id="all-services-div">
      {
        services.map((service) => (
          <div className="service-outer-section" key={service.description}>
            <div className={service.isReversed ? 'service-section reversed' : 'service-section'} onClick={() => showServiceDescription(service.index)} onMouseEnter={() => setCursorClass(['enlarge-cursor'])} onMouseLeave={() => setCursorClass(['cursor-no-svg'])}>
              <img src={service.mainImage} className='service-img' ref={(element) => imageRefs.current.push(element)} alt='image'/>

              <div className='text-div animated-text-div' ref={(element) => textDivRefs.current.push(element)}> 
                <span className='tag-text'>{service.tag}</span>
                <h1>{service.headline}</h1>
                <p className='description-text'>{service.description}</p>

                <div className="more-info-button">
                  <span> More Info </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="white"></path> </svg>
                </div>
              </div>
            </div>

            <div className={service.isReversed ? 'service-section description-section reversed reversed-description' : 'service-section description-section'} ref={(element) => descriptionSectionRefs.current.push(element)} onClick={() => dissmissServiceDescription(service.index, service.isReversed)} onMouseEnter={() => setCursorClass(['enlarge-cursor', 'cursor-left-arrow-svg'])} onMouseLeave={() => setCursorClass(['cursor-no-svg'])}>              
              <div className='text-div'>
                <span className='tag-text'>{service.tag}</span>
                <h1>{service.secondHeadline}</h1>
                <p className="description-text">{service.secondDescription}</p>
                
                <div className="buttons-div"> 
                  <Link className='custom-button' to={'contact-session'} spy={true} smooth={true} duration={1500}> <span>Interested?</span> </Link>
                  <button className='custom-button'> <span>Close</span> </button>
                </div>
              </div>

              <div className="service-imgs-div">
                <img src={service.closeupImage} className="service-img closeup-service-img" alt='image'/>
                <img src={service.behindImage} className="service-img carseat-service-img" alt='image'/>
              </div>
            </div>
          </div>
        ))
      }
    </div>      
    </>
  )
}
