export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'SAP Integration',
      description: 'Synchronizing enterprise procurement and PR data.',
    },
    {
      name: 'Email Notification System',
      description: 'Automated workflow notification delivery system.',
    },
    {
      name: 'Document Upload Service',
      description: 'File handling and document preview integration.',
    },
  ]

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <h1 style={titleStyle}>🔗 Integrations</h1>

        <p style={subtitleStyle}>
          System integrations and enterprise connectivity solutions.
        </p>
      </section>

      <section style={gridStyle}>
        {integrations.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div
              style={{
                fontSize: '2.5rem',
                marginBottom: '16px',
              }}
            >
              🔌
            </div>

            <h2 style={cardTitleStyle}>{item.name}</h2>

            <p style={cardDescriptionStyle}>
              {item.description}
            </p>
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
  maxWidth: '1000px',
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
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: '24px',
  padding: '28px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
}

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: '#1c1917',
  marginBottom: '12px',
}

const cardDescriptionStyle: React.CSSProperties = {
  color: '#57534e',
  lineHeight: 1.7,
}