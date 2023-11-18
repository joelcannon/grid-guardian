export function saveMarkersToLocalStorage(markers) {
  const markersJson = JSON.stringify(markers);
  localStorage.setItem("markers", markersJson);
}

export function loadMarkersFromLocalStorage() {
  const markersJson = localStorage.getItem("markers");
  return markersJson ? JSON.parse(markersJson) : [];
}
