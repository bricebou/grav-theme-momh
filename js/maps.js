$(document).ready(function () {
  $(".instamap").each(function () {
    var id = $(this).attr("id");
    var lat = $(this).attr("data-lat");
    var lon = $(this).attr("data-lon");

    var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    id = L.map(id, {
      layers: [OpenStreetMap],
      fullscreenControl: true,
    }).setView([lat, lon], 13);

    var baseMaps = {
      "OpenStreetMap": OpenStreetMap,
      "OpenStreetMap France": OpenStreetMap_France,
      "Esri Satellite": Esri_WorldImagery
    };

    L.control.layers(baseMaps).addTo(id);

    // Un seul point affiché sur la carte,
    // correspondant aux premières coordonnées GPS trouvées
    var marker = L.marker([lat, lon]).addTo(id);

    // Tous les points possibles, si les photos ont les métadonnées
    // var coord = {{ latlngs|json_encode }};
    // for (i = 0; i < coord.length; i++) {
    //   var marker = L.marker([coord[i][0], coord[i][1]]).addTo(map{{ page.id }});
    // };
  });
});
