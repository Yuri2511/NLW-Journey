const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08T10:00:00"),
  finalizada: false,
};

const criarItemDeAtividade = (atividade) => {
  let input = '<input type="checkbox" ';

  if (atividade.finalizada) {
    input += 'checked';
  }

  input += '>';

  return `
  <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data.toLocaleString()}</time>
  </div>`;
};

const section = document.querySelector('section');
section.innerHTML = criarItemDeAtividade(atividade);
