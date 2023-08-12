import React, { useState } from 'react';
import './styles.css'

const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && email && mensagem) {
      // Aqui você pode adicionar a lógica para enviar o e-mail.
      // Por enquanto, apenas definiremos enviado como true para simular o envio.
      setEnviado(true);
    }
  };

  return (
    <div id="contato" className="contato-container">
      <h2>Entre em Contato</h2>
      {enviado ? (
        <p>Seu e-mail foi enviado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Mensagem:</label>
            <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          </div>
          <div className="button-container">
            <button type="submit" className="btn-download">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contato;