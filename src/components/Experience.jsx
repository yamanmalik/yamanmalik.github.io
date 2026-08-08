import useReveal from '../hooks/useReveal'

const JOBS = [
  {
    logo: '/assets/Fidelity-Investments-Logo.png',
    company: 'Fidelity Investments',
    role: 'Associate Software Engineer',
    dates: 'January 2023 - Present',
    location: 'Boston, Massachusetts',
  },
  {
    logo: '/assets/Rogers-Logo.png',
    company: 'Rogers Communications',
    role: 'Software Developer',
    dates: 'January 2022 - August 2022',
    location: 'Brampton, Ontario',
  },
]

function JobCard({ job }) {
  const ref = useReveal()
  return (
    <div className="timeline__item reveal" ref={ref}>
      <div className="timeline__dot" />
      <div className="timeline__card">
        <img src={job.logo} alt={job.company} className="timeline__logo" />
        <div>
          <h4>
            {job.company} <span className="timeline__role">| {job.role}</span>
          </h4>
          <p className="timeline__meta">{job.dates}</p>
          <p className="timeline__meta timeline__meta--italic">{job.location}</p>
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
