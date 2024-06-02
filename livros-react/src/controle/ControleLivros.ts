import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 2'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 3'] },
];

export class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map((l) => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}