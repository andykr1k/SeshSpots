import * as React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map() {
        
    const position = [40, -80]

return(
  <MapContainer center={position} zoom={50} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)
  
}

export default Map
