export default function BackendPage() {
  const backendProjects = [
    'REST API Development',
    'ASP.NET Core APIs',
    'Authentication & Authorization',
    'SQL Server Integration',
    'Stored Procedures & Optimization',
    'Notification System',
  ]

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <h1 style={titleStyle}>⚙️ Backend Projects</h1>

        <p style={subtitleStyle}>
          Backend systems, APIs, and enterprise application development.
        </p>
      </section>

      <section style={listContainerStyle}>
        {backendProjects.map((item, index) => (
          <div key={index} style={listItemStyle}>
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
            <span>{item}</span>
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
  maxWidth: '900px',
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

const listContainerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  background: 'white',
  padding: '24px',
  borderRadius: '20px',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1c1917',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
}