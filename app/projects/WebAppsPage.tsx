export default function WebAppsPage() {
  const projects = [
    {
      title: 'CatStack Portfolio',
      description: 'Modern responsive portfolio website built with Next.js.',
      stack: 'Next.js • TypeScript • CSS',
      emoji: '🐱',
    },
    {
      title: 'Fish Feed Landing Page',
      description: 'Clean landing page for AquaBoost product showcase.',
      stack: 'Next.js • UI Design • Responsive',
      emoji: '🐟',
    },
    {
      title: 'Dashboard UI',
      description: 'Interactive dashboard with charts and analytics.',
      stack: 'React • Charts • Dashboard',
      emoji: '📊',
    },
  ]

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <h1 style={titleStyle}>🌐 Web Apps</h1>

        <p style={subtitleStyle}>
          Collection of frontend and fullstack web application projects.
        </p>
      </section>

      <section style={gridStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <div style={{ fontSize: '3rem' }}>
              {project.emoji}
            </div>

            <h2 style={cardTitleStyle}>
              {project.title}
            </h2>

            <p style={cardDescriptionStyle}>
              {project.description}
            </p>

            <div style={tagStyle}>
              {project.stack}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'var(--cream)',
  padding: '120px 24px 60px',
}

const heroStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto 48px',
  textAlign: 'center',
}

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 800,
  color: '#1c1917',
  marginBottom: '16px',
}

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#57534e',
}

const gridStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px',
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: '24px',
  padding: '28px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  border: '1px solid rgba(249,115,22,0.08)',
}

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1c1917',
  marginTop: '16px',
  marginBottom: '12px',
}

const cardDescriptionStyle: React.CSSProperties = {
  color: '#57534e',
  lineHeight: 1.7,
  marginBottom: '18px',
}

const tagStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '8px 14px',
  borderRadius: '9999px',
  background: 'rgba(249,115,22,0.1)',
  color: 'var(--orange)',
  fontWeight: 600,
  fontSize: '0.875rem',
}