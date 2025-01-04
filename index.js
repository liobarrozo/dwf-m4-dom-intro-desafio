const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "lvl-0",
  },
  {
    tema: "node",
    class: "lvl-0",
  },
  {
    tema: "oop",
    class: "lvl-1",
  },
  {
    tema: "typescript",
    class: "lvl-1",
  },
  {
    tema: "css",
    class: "lvl-2",
  },
  {
    tema: "DOM",
    class: "lvl-2",
  },
];

function main() {

  const lista = document.querySelector('.lista');
  for (let x= 0; x < cosasQueAprendimos.length; x++){
    //creamos un li
    const nuevoEl = document.createElement('li');

    //asignamos el texto y clase al li
    nuevoEl.textContent = cosasQueAprendimos[x].tema;
    nuevoEl.classList.add(cosasQueAprendimos[x].class);

    //agregamos el li al <ul>
    lista.appendChild(nuevoEl);

  }
}

main();
