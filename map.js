function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 50.0, lng: 10.0 }
  });

  const locations = [
    {
      name: "Barcelona",
      position: { lat: 41.3851, lng: 2.1734 },
      url: "https://hscaledc.sharepoint.com/"
    },
    {
      name: "London",
      position: { lat: 51.5074, lng: -0.1278 },
      url: "https://hscaledc.sharepoint.com/"
    },
    {
      name: "Oslo",
      position: { lat: 59.9139, lng: 10.7522 },
      url: "https://hscaledc.sharepoint.com/"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.name
    });

    marker.addListener("click", () => {
      window.open(loc.url, "_blank");
    });
  });
}

