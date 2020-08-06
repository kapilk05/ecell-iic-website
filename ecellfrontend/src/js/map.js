mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fha3NoaXNoYWgiLCJhIjoiY2tjMzBhd2p2MjI1NjJybmFlazh6Y2RudCJ9.MhchJI1OMSvcS4v_N354FQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [72.837424, 19.108731],
  zoom: 12.5,
});
// disable map zoom when using scroll
map.scrollZoom.disable();
var marker = new mapboxgl.Marker().setLngLat([72.837424, 19.108731]).addTo(map);
