import useReveal from '../hooks/useReveal'

const SKILLS = [
  { src: '/assets/python.png', name: 'Python' },
  { src: '/assets/java.webp', name: 'Java' },
  { src: '/assets/sql.png', name: 'SQL' },
  { src: '/assets/c.png', name: 'C' },
  { src: '/assets/angular.svg', name: 'Angular' },
  { src: '/assets/html.png', name: 'HTML' },
  { src: '/assets/css.png', name: 'CSS' },
  { src: '/assets/javascript.png', name: 'JavaScript' },
  { src: '/assets/git.png', name: 'Git' },
]

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Toolbox</p>
        <h2>Skills</h2>
        <div className="skills">
          {SKILLS.map((s) => (
            <div className="skills__pill" key={s.name}>
              <img src={s.src} alt={s.name} />
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
