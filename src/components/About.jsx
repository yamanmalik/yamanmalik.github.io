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
            I'm a <strong>Software Engineer</strong> at <strong>Fidelity Investments</strong>, where I
            build and modernize the platforms behind regulatory reporting; including an
            ongoing migration of core reporting off the mainframe and onto the cloud.
          </p>
          <p>
            I joined Fidelity as an Associate Software Engineer in Boston in 2023, after finishing my Computer
            Science degree at <strong>York University</strong>. I'm currently completing an{' '}
            <strong>M.S. in Computer Science at Georgia Tech</strong>, specializing in Artificial Intelligence.
          </p>
          
          <p>
            Always looking for opportunities to learn, discuss new and interesting ideas, and meet ambitious people, so feel free to contact me!
          </p>
        </div>
      </div>
    </section>
  )
}
