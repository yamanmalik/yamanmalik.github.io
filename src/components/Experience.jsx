import useReveal from '../hooks/useReveal'

const JOBS = [
  {
    logo: '/assets/Fidelity-Investments-Logo.png',
    company: 'Fidelity Investments',
    roles: [
      {
        role: 'Software Engineer',
        dates: 'July 2024 - Present',
        location: 'New York Metro Area',
      },
      {
        role: 'Associate Software Engineer',
        dates: 'January 2023 - June 2024',
        location: 'Boston, Massachusetts',
      },
    ],
  },
  {
    logo: '/assets/Rogers-Logo.png',
    company: 'Rogers Communications',
    roles: [
      {
        role: 'Software Developer',
        dates: 'January 2022 - August 2022',
        location: 'Toronto, Ontario',
      },
    ],
  },
]

function JobCard({ job }) {
  const ref = useReveal()
  return (
    <div className="timeline__item reveal" ref={ref}>
      <div className="timeline__dot" />
      <div className="timeline__card">
        <img src={job.logo} alt={job.company} className="timeline__logo" />
        <div className="timeline__body">
          <h4>{job.company}</h4>
          <div className="timeline__roles">
            {job.roles.map((r, i) => (
              <div className={`role ${i > 0 ? 'role--sub' : ''}`} key={r.role}>
                <p className="role__title">{r.role}</p>
                <p className="timeline__meta">{r.dates}</p>
                <p className="timeline__meta timeline__meta--italic">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="eyebrow">Career</p>
        <h2>Experience</h2>
        <div className="timeline">
          {JOBS.map((job) => (
            <JobCard key={job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
