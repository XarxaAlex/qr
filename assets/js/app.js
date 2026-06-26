let obras = [];

const grid = document.getElementById('grid');
const search = document.getElementById('search');

function render(list) {
  grid.innerHTML = list.map(o => `
    <article class="card">
      <img src="${o.imagen}" alt="${o.titulo}">
      <div class="body">
        <h2>${o.titulo}</h2>
        <p class="meta"><strong>Alumno:</strong> ${o.alumno}</p>
        <p class="meta"><strong>Canción:</strong> ${o.cancion}</p>
        <p class="meta">${o.artista}</p>
        <div class="actions">
          <a class="btn" href="obra.html?slug=${o.slug}">Abrir ficha</a>
        </div>
      </div>
    </article>
  `).join('');
}

fetch('data/obras.json')
  .then(r => r.json())
  .then(data => {
    obras = data;
    render(obras);
  });

search?.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  render(obras.filter(o =>
    [o.titulo, o.alumno, o.cancion, o.artista].some(v => v.toLowerCase().includes(q))
  ));
});