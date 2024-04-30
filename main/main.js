document.addEventListener('DOMContentLoaded', () => {
    // Установите начальное состояние элемента явно
    document.getElementById('menu').style.display = 'none';
  });
  
  document.getElementById('menu-btn').addEventListener('click', function() {
    var content = document.getElementById('menu');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
      // Установите начальное состояние элемента явно
      document.getElementById('skidka').style.display = 'none';
    });
    
    document.getElementById('ava').addEventListener('click', function() {
      var content = document.getElementById('skidka');
      if (content.style.display === 'none') {
        content.style.display = 'flex';
      } else {
        content.style.display = 'none';
      }
    });
  
  
  ymaps.ready(initMaps);
  
  function initMaps() {
      createMap('map1',[55.76, 37.64], [[55.819204, 37.964244],[55.827399, 37.955604]]);
      createMap('map2', [55.76, 37.64], [[55.819204, 37.964244],[55.827399, 37.955604]]);
  }
  
  function createMap(mapId, centerCoords, placemarks) {
      var map = new ymaps.Map(mapId, {
          center: [55.819204, 37.964244],
          zoom: 13
      });
  
      placemarks.forEach(function(coords) {
          var placemark = new ymaps.Placemark(coords, {
              hintContent: 'Улыбка Стоматологическая клиника',
              balloonContent: 'Описание метки'
          });
          map.geoObjects.add(placemark);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
  
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Change color to red when individual SVG is clicked
            this.style.color = '#4CAF50';
        });
    });
  
    const links = document.querySelectorAll('.download-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            this.children[0].style.color = '#4CAF50'; // Change color of SVG
            const url = this.getAttribute('href');
            const name = this.getAttribute('download');
            window.open(this.href, '_blank'); // Открыть файл в новом окне
  
            
        });
    });
  });
  
  function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function changeColorsAndOpenFile() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.style.color = '#4CAF50'; // Change color to red
    });
    window.open('../doci/Federalnyj_zakon_ot_21_noyabrya_2011_g._N_323-FZ.pdf', '_blank'); // Open a file in a new window
  }
  
  
  
  
  
  