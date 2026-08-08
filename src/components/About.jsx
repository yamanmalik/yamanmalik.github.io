import useReveal from '../hooks/useReveal'
import useTypewriter from '../hooks/useTypewriter'

export default function About() {
  const ref = useReveal()
  const typed = useTypewriter("I'm Yaman.")

  return (
    <section id="about">
      <div className="wrap about reveal" ref={ref}>
        <div className="about__intro">
          <img className="about__avatar" src="/assets/dev-icon.png" alt="Yaman Malik" width="96" height="96" />
          <div>
            <p className="eyebrow">Hello!</p>
            <h2 className="about__typed">
              {typed}
              <span className="about__cursor" />
            </h2>
          </div>
        </div>

        <div className="about__copy">
          <p>
            I am a <strong>Computer Science graduate</strong> from <strong>York University</strong> currently
            working at <strong>Fidelity Investments</strong> as a <strong>Software Engineer</strong>. I am a
            career driven individual focused on broadening and enhancing my skills on a daily basis. Through my
            previous internship, mentoring students, training projects, and my current full-time role, I have
            been able to greatly expand my skillset and experience all phases of the development lifecycle. I
            am always looking to learn new things and teach myself something new everyday.
          </p>
          <p>
            I am interested in full-stack development with an emphasis on the backend. I enjoy working with data
            and have a growing interest in data science and the cloud. My other interests include finance,
            sports and photography!
          </p>
          <p>
            Always looking for opportunities to learn, discuss new and interesting ideas, and meet ambitious
            people, so feel free to contact me!
          </p>
        </div>
      </div>
    </section>
  )
}
