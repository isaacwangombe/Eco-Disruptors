import React from "react";
import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState } from "react";
import { MapView, LocationSearch } from "@aws-amplify/ui-react";
import { Marker } from "react-map-gl";

const Map = () => {
  const [{ latitude, longitude }, setMarkerLocation] = useState({
    latitude: -1.3223,
    longitude: 36.8289,
  });
  return (
    <div>
      <MapView
        className="w-12"
        zoom={14}
        latitude={latitude}
        longitude={longitude}
      >
        <Marker latitude={latitude} longitude={longitude} />
      </MapView>
    </div>
  );
};

export default Map;
