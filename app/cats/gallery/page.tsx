'use client'

import Image from 'next/image'

const catImages = [
  {
    src: '/cats/cat1.jpg',
    title: 'The Gang',
    description: 'Princess Timmy, Ocil, Chika on the line.',
  },
  {
    src: '/cats/cat2.jpg',
    title: 'Sleepy Princess',
    description: 'Princess Timmy Sleeping Beauty.',
  },
  {
    src: '/cats/cat3.jpg',
    title: 'Mischief Ocil',
    description: 'Cute but mischief.',
  },
  {
    src: '/cats/cat4.jpg',
    title: 'Chika on duty',
    description: 'Masseur Chika.',
  },
  {
    src: '/cats/cat5.jpg',
    title: 'Mr. Chiko',
    description: 'New Member Addition Chiko.',
  },
  {
    src: '/cats/cat6.jpg',
    title: 'El-Lorengto Margriente Del-Partigore Hernando Zaragoza',
    description: 'Clingy but love to fight.',
  },
  {
    src: '/cats/cat7.jpg',
    title: 'A random cat in Cikunir 2 Station',
    description: 'Looks like Loreng.',
  },
  {
    src: '/cats/cat8.jpg',
    title: '(In Memoriam) Bolang',
    description: 'Lovely soul that gone too soon.',
  }, 
  {
    src: '/cats/cat9.jpg',
    title: 'Mayor Chiko El-Gato',
    description: 'Mayor Chiko Profile Picture.',
  }, 
  {
    src: '/cats/cat10.jpg',
    title: 'Orange Milk Cat',
    description: 'Stray cat at Parakan.',
  },
  {
    src: '/cats/cat11.jpg',
    title: 'Little Sapi',
    description: 'Stray cat at Solo.',
  },  
  {
    src: '/cats/cat12.jpg',
    title: 'Vet Keeper Cat',
    description: 'Look so mean but lovable.',
  }, 
]

export default function GalleryPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--cream)',
        padding: '120px 24px 60px',
      }}
    >
      {/* Header */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto 48px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#1c1917',
            marginBottom: '16px',
          }}
        >
          🖼️ Cat Gallery
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            color: '#57534e',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          A collection of adorable cats stored locally inside your Next.js
          project.
        </p>
      </section>

      {/* Gallery Grid */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {catImages.map((cat, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              transition: 'transform 0.25s ease',
              border: '1px solid rgba(249,115,22,0.08)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform =
                'translateY(-6px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'none'
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '260px',
              }}
            >
              <Image
                src={cat.src}
                alt={cat.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1c1917',
                  marginBottom: '10px',
                }}
              >
                {cat.title}
              </h2>

              <p
                style={{
                  color: '#57534e',
                  lineHeight: 1.6,
                }}
              >
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}