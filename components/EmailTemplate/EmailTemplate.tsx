const EmailTemplate = ({ name, email, message }: IEmailProps) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f3f4f6',
      margin: 0,
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <header style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          textAlign: 'center',
          padding: '20px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}>
          <h1 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            margin: 0
          }}>Nova Mensagem</h1>
        </header>
        <main style={{ padding: '15px' }}>
          <p style={{
            fontSize: '14px',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Você recebeu uma nova mensagem do seu formulário de contato:
          </p>
          <div style={{
            backgroundColor: '#f9fafb',
            borderLeft: '4px solid #000000',
            padding: '16px',
            marginBottom: '20px'
          }}>
            <p style={{ marginBottom: '8px' }}>
              <strong>Nome:</strong> {name}
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>E-mail:</strong> {email}
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Mensagem:</strong>
            </p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#4b5563',
            textAlign: 'center'
          }}>
            Este e-mail foi enviado automaticamente pelo seu formulário de contato.
          </p>
        </main>
        <footer style={{
          textAlign: 'center',
          padding: '20px',
          color: '#6b7280',
          fontSize: '12px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <p>&copy; 2024 Thiago Correa. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default EmailTemplate;