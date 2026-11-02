/* Instituto Sharon — partículas do hero + mapa das unidades (Leaflet/OpenStreetMap) */
(function () {
  var d = document.querySelector(".dust");
  if (d) for (var i = 0; i < 18; i++) {
    var p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 8 + "s";
    p.style.animationDelay = -Math.random() * 10 + "s";
    d.appendChild(p);
  }
  window.addEventListener("load", function () {
    var el = document.getElementById("map");
    if (!el || !window.L) return;
    var U = [[-3.06696, -60.025, 14], [-3.7932, -38.528, 11], [-8.7494, -63.8735, 11], [-23.5506, -46.6334, 10]];
    var names = ["Manaus — Sede", "Fortaleza", "Porto Velho", "São Paulo"], mk = [], items = document.querySelectorAll(".unit");
    var map = L.map(el, { scrollWheelZoom: false }).setView([-9, -52], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap" }).addTo(map);
    function icon(on) { return L.divIcon({ className: "", html: '<div class="pin' + (on ? " on" : "") + '"></div>', iconSize: [34, 34], iconAnchor: [17, 34] }); }
    function sel(i, fly) {
      items.forEach(function (x, k) { x.classList.toggle("on", k === i); mk[k].setIcon(icon(k === i)); });
      if (fly) map.flyTo([U[i][0], U[i][1]], U[i][2], { duration: 1.2 });
    }
    U.forEach(function (u, i) {
      mk[i] = L.marker([u[0], u[1]], { icon: icon(i === 0) }).addTo(map)
        .bindPopup("<b>Instituto Sharon</b><br>" + names[i]).on("click", function () { sel(i, true); });
    });
    items.forEach(function (x, i) {
      function go(e) { if (e.target.closest("a")) return; sel(i, true); }
      x.addEventListener("click", go);
      x.addEventListener("keydown", function (e) { if (e.key === "Enter") go(e); });
    });
    map.fitBounds(L.featureGroup(mk).getBounds().pad(0.2));
    new IntersectionObserver(function (en, o) { if (en[0].isIntersecting) { map.invalidateSize(); o.disconnect(); } }, { threshold: 0.2 }).observe(el);
  });
})();
