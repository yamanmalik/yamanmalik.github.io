export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__field" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="eyebrow">Software Engineer</p>
        <h1 className="hero__name">Yaman Malik</h1>
        <p className="hero__tagline">New York City</p>
        <a className="hero__cta" href="#about">
          <span>Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
