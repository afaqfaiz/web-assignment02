import React, { useEffect } from "react";

const GoogleMap = ({ mapType, zoom, center }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById(mapType), {
      zoom: zoom,
      center: center,
      mapTypeId: mapType,
    });
  }, [mapType, zoom, center]);

  return <div id={mapType} style={{ height: "300px" }}></div>;
};

export default GoogleMap;
