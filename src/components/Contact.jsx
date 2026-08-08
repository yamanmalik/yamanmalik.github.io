import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Get in touch</p>
        <h2>Contact</h2>
        <div className="contact__actions">
          <a className="contact__btn" href="http://www.linkedin.com/in/yamanmalik" target="_blank" rel="noreferrer">
            <img src="/assets/linkedin-white.png" width="20" height="20" alt="" />
            LinkedIn
          </a>
          <a className="contact__btn" href="https://github.com/yamanmalik" target="_blank" rel="noreferrer">
            <img src="/assets/github.png" width="20" height="20" alt="" />
            GitHub
          </a>
          <a className="contact__btn contact__btn--accent" href="/assets/Yaman_Malik_Resume.pdf" target="_blank" rel="noreferrer">
            <img src="/assets/resume-transparent.png" width="20" height="20" alt="" />
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
