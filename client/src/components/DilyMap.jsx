import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker_icon from "../assets/other-icon/location.svg";

const markerIcon = new L.Icon({
  iconUrl: marker_icon,
  iconSize: [40, 50],
});
const DilyMap = () => {
  // const

    return (
        <div className="w-full h-full">
            <MapContainer className='border-2 w-full h-full' center={[40.873687608334365, 71.95770968922785]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/streets-v2/?key=JG1L3M21TZYPRXmdbz52#1.0/0.00000/0.00000"
                />
                <Marker position={[40.873687608334365, 71.95770968922785]} icon={markerIcon} >
                    <Popup>
                        Bizning Fillial
                    </Popup>
                </Marker>
                <Marker position={[40.87223442998545, 71.95834006076952]} icon={markerIcon} >
                    <Popup>
                        Bizning Fillial
                    </Popup>
                </Marker>
                <Marker position={[40.87440106571077, 71.95653098575843]} icon={markerIcon}  >
                    <Popup>
                        Bizning Fillial
                    </Popup>
                </Marker>
            </MapContainer></div>
    )
}

export default DilyMap;
