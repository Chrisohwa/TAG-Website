import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Show Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// resizing when inside flex/Box
const ResizeHandler = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
};

const MapComponent = () => {
  const position = [6.432173, 3.434005];

  return (
    <Box w="100%" h="500px" >
      <Box
        w="100%"
        h="100%"
        borderRadius="xl"
        boxShadow="xl"
      >
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <ResizeHandler />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          <Marker position={position}>
            <Popup>📍 Transalliance Group </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MapComponent;
