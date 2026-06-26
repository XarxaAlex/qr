const slug = new URLSearchParams(location.search).get('slug');

fetch('data/obras.json')
  .then(r => r.json())
  .then(items => {
    const o = items.find(x => x.slug === slug) || items[0];
    document.title = `${o.titulo} | Ficha`;

    document.getElementById('content').innerHTML = `
      <img src="${o.imagen}" alt="${o.titulo}">
      <div class="body">
        <p class="eyebrow">Ficha de obra</p>
        <h1>${o.titulo}</h1>
        <p class="meta"><strong>Alumno:</strong> ${o.alumno}</p>
        <p class="meta"><strong>Canción:</strong> ${o.cancion} — ${o.artista}</p>
        <p>${o.descripcion}</p>
        <audio class="audio" controls preload="none">
          <source src="${o.audio}" type="audio/mpeg">
          Tu navegador no soporta audio HTML5.
        </audio>
        <p class="note">Si no suena, revisa la ruta del MP3 o prueba otro formato compatible.</p>
      </div>
    `;
  });