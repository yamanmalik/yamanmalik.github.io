import useReveal from '../hooks/useReveal'

const SCHOOLS = [
  {
    logo: '/assets/georgia-tech.png',
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science - Artificial Intelligence',
    dates: 'August 2024 - May 2027 (expected)',
    location: 'Atlanta, Georgia',
  },
  {
    logo: '/assets/york.png',
    school: 'York University',
    degree: 'B.Sc. Computer Science',
    dates: 'September 2019 - December 2022',
    location: 'Toronto, Ontario',
  },
]

function SchoolCard({ item }) {
  const ref = useReveal()
  return (
    <div className="timeline__item reveal" ref={ref}>
      <div className="timeline__dot" />
      <div className="timeline__card">
        <img src={item.logo} alt={item.school} className="timeline__logo" />
        <div className="timeline__body">
          <h4>{item.school}</h4>
          <div className="timeline__roles">
            <div className="role">
              <p className="role__title">{item.degree}</p>
              <p className="timeline__meta">{item.dates}</p>
              <p className="timeline__meta timeline__meta--italic">{item.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <p className="eyebrow">Academics</p>
        <h2>Education</h2>
        <div className="timeline">
          {SCHOOLS.map((item) => (
            <SchoolCard key={item.school} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
