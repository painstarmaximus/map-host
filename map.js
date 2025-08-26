function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 50.0, lng: 10.0 }
  });

  const locations = [
    {
      name: "Barcelona",
      position: { lat: 41.3851, lng: 2.1734 },
      url: "https://cromwellmdicouk.sharepoint.com/sites/SynergyAssociates"
    },
    {
      name: "London",
      position: { lat: 51.5074, lng: -0.1278 },
      url: "https://news.bbc.co.uk"
    },
    {
      name: "Oslo",
      position: { lat: 59.9139, lng: 10.7522 },
      url: "https://en.wikipedia.org/wiki/Oslo"
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
