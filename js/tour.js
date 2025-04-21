const hotspots = [
    //{ id: 'h1', pitch: -6, yaw: -8, type: 'img', src: 'https://via.placeholder.com/600x400.png?text=Hola'},
   { id: 'h1', pitch: -6, yaw: -8,   type: 'yt',   src: 'https://www.youtube.com/embed/ok-aNnc0Dko?si=gy1N21WP1GCdExP3', title: 'Cliente: Spotify', desc: 'Este es un ejemplo de nuestro servicios a spotify ',   alt: 'Spotify' },
   { id: 'h2', pitch: -23, yaw: -69,  type: 'img', src: 'imagenes/nike.jpg', title: 'Cliente: Nike', desc: 'Apoyamos a nuestros clientes con constantes innovaciones es sus nuevas etapas', alt: 'Nike' },
    { id: 'h3', pitch: 5,  yaw: 107,   type: 'audio', src: 'audio/audio.mp3', title: 'Cliente: Mcdonalds', desc: 'Hemos apoyado a la marca con la creacion de sonidos que refuercen su presencia en los medios', alt: 'Mcdonalds' },
    { id: 'h4', pitch: 21, yaw: 38,  type: 'pdf',   src: 'pdf/google.pdf', title: 'Cliente: Google', desc: 'Aca puede ver un ejemplo de una campaña exitosa que realizamos con nuestro cliente', alt: 'Google' },
    { id: 'h5', pitch: 12, yaw: -45, type: 'img',   src: 'imagenes/amazon.png', title: 'Cliente: Amazon', desc: 'Todos nuestros apartamentos vienen decorados con flores locales', alt: 'Amazon'},
  ];

const viewer = pannellum.viewer('panorama', {
    type: 'equirectangular',
    panorama: 'imagenes/360.jpg',
    autoLoad: true,
    hfov: 110,
    pitch: 0,
    yaw: 0,
  
    hotSpots: hotspots.map(h => ({
      id: h.id,
      pitch: h.pitch,
      yaw: h.yaw,
      type: 'custom',               // ← indicamos que es personalizado
      cssClass: 'custom-hotspot',
      clickHandlerFunc: () => {     // ← aquí llamamos al modal
        showModal(h);
      }
    }))
  });

  
  // 4 Función para crear el elemento visual
  function hotspotTooltip(hotSpotDiv, args) {
    hotSpotDiv.setAttribute('aria-label', 'Punto interactivo ' + args);
  }
  

  
  // 6 Modal – muestra contenido según tipo
  const modal        = document.getElementById('modal');
  const modalBody    = document.getElementById('modalBody');
  const closeModalBtn= document.getElementById('closeModal');
  
  closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
  
const modalTitle = document.getElementById('modalTitle');
const modalDesc  = document.getElementById('modalDesc');

function showModal(hs) {
  // 1. Título y descripción
  modalTitle.textContent = hs.title || '';
  modalDesc.textContent  = hs.desc  || '';

  // 2. Contenido multimedia
  modalBody.innerHTML = '';

  switch (hs.type) {
    case 'img':
      modalBody.innerHTML = `<img src="${hs.src}" alt="${hs.title || ''}">`;
      break;
    case 'video':
      modalBody.innerHTML = `<video controls src="${hs.src}"></video>`;
      break;
    case 'audio':
      modalBody.innerHTML = `<audio controls src="${hs.src}"></audio>`;
      break;
    case 'pdf':
      modalBody.innerHTML = `<iframe class="pdf" src="${hs.src}"></iframe>`;
      break;
    case 'yt':
      modalBody.innerHTML = `
        <div class="yt-container">
          <iframe class="yt"
                  src="${hs.src}"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>`;
      break;
    default:
      modalBody.textContent = 'Tipo de contenido no soportado.';
  }

  modal.classList.remove('hidden');
}
  
  /* 7 Accesibilidad – Cerrar modal con ESC */
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });