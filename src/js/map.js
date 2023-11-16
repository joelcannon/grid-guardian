import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyA5_4E24xxgD4akSaTxi1Bs2QRsSLEqOIM",
  version: "weekly",
});

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById("map"), {
    //  center: { lat: 39.930213, lng: -93.932722 },
    center: { lat: 39.93459, lng: -93.924026 },
    zoom: 18,
    mapTypeId: "satellite",
  });
});