import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyA5_4E24xxgD4akSaTxi1Bs2QRsSLEqOIM",
  version: "weekly",
});

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    mapTypeId: "satellite",
  });
});
