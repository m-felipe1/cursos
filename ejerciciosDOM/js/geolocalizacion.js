const d = document;
const n = navigator;

export default function getGeoLOcation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0,
    };

  const succes = (position) => {
    let coords = position.coords;
    $id.innerHTML = `
        <p>Tu posicion actual es</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target='_blank' rel='noopener'>Ver en Google Maps</a> 
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>error ${err.code}: ${err.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}
