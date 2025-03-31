import { useEffect, useLayoutEffect, useRef } from 'react'
import '../CSS/contactSection.scss'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const headlineRef = useRef(null)
  const formRef = useRef(null)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const companyRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)
  const submitBtnRef = useRef(null)
  const loaderRef = useRef(null)

  useEffect(() => emailjs.init("DNLrQXtv6udBD5RYJ"), []);

  useLayoutEffect(() => {
    const headline = new SplitType(headlineRef.current)

    const ctx = gsap.context(() => {
      gsap.to('#contact-session .word', {
        x: 0,
        opacity: 1,
        stagger: 0.015,
        duration: 1.,
        delay: 0.2,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top bottom'
        }
      })
      gsap.to(formRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom'
        }
      })
    })

    return () => {
      ctx.revert();
      headline.revert()
    }
  }, [headlineRef])

  const handleEmailSend = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const email = emailRef.current.value
    const company = companyRef.current.value
    const phone = phoneRef.current.value
    const message = messageRef.current.value
    
    if (validateEmail(email) && name !== "" && message !== "" && company !== "") {        
      //Loader
      submitBtnRef.current.value = ''
      loaderRef.current.style.opacity = 1
      //Send message
      var params = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        company_name: companyRef.current.value,
        phone_number: phoneRef.current.value
      }
      
      emailjs.send('service_ttuoguf', 'template_q8p24co', params)
        .then(() => {
            //Message sent
        });
      //

      setTimeout(() => {      
        //Message is sent
        submitBtnRef.current.value = 'Message is sent'
        loaderRef.current.style.opacity = 0

        setTimeout(() => {
          //Return to normal
          submitBtnRef.current.value = 'Send message'

          nameRef.current.value = ""
          emailRef.current.value = ""
          companyRef.current.value = ""
          phoneRef.current.value = ""
          messageRef.current.value = ""
        }, 2000)
      }, 2500)
    }
    else {
      submitBtnRef.current.value = 'Fill out form'

      setTimeout(() => {
        submitBtnRef.current.value = 'Send message'
      }, 3000)
    }
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <>
      <div id="contact-session" className="spacing-div">
        <h1 className='huge-headline' ref={headlineRef}>Contact us</h1>

        <form ref={formRef}>
          <div className='input-hori-div'>
            <label>Name
              <input ref={nameRef} className='input-field' placeholder='e.g. Peter Griffin' type="text" />
            </label>

            <label>Email
              <input ref={emailRef} className='input-field' placeholder='e.g. peter@mail.co' type="text" />
            </label>
          </div>
          
          <div className='input-hori-div'>
            <label>Company/Project name
              <input ref={companyRef} className='input-field' placeholder='e.g. Spine' type="text" />
            </label>

            <label>Phone (Optional)
              <input ref={phoneRef} className='input-field' placeholder='e.g. 911' type="text" />
            </label>
          </div>

          <label>Your message
            <textarea ref={messageRef} className='input-field text-area' placeholder='Tell us more about the project'></textarea>
          </label>

          <div className='submit-div input-field' onClick={handleEmailSend}>
          <div ref={loaderRef} className="lds-ripple"><div></div><div></div></div>
            <input type="submit" ref={submitBtnRef} className='submit-button' value="Send message"/>
          </div>
        </form>
      </div>
    </>
  )
}
