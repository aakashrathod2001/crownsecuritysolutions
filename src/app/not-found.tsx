import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '0 0 2rem 0' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', margin: '0 0 2rem 0', color: '#666' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#c7a034',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
