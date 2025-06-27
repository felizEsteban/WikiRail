const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '87vh',
      textAlign: 'center',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      <div>
        <h1 style={{ 
          marginBottom: '1rem',
          fontSize: '2.2rem',
          color: '#e11d48'
        }}>
          Error 404
        </h1>
        
        <p style={{
          marginBottom: '2rem',
          fontSize: '1.1rem',
          color: '#666'
        }}>
          La página que buscas no existe.
        </p>
        
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;