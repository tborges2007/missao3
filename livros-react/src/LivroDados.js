import React from 'react';

const LivroDados = () => {
  return (
    <main>
      <h1>Olá mundo</h1>
    </main>
  );
};

export default LivroDados;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [codEditora, setCodEditora] = useState(controleEditora.getEditoras()[0].codEditora);
  const [autores, setAutores] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split('\n'),
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Resumo:</label>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={(e) => setCodEditora(Number(e.target.value))}>
            {controleEditora.getEditoras().map((editora) => (
              <option key={editora.codEditora} value={editora.codEditora}>
                {editora.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Autores (um por linha):</label>
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default LivroDados;