import React from 'react';
import { Container } from './MyMap.styles.ts';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: -24.495860839810952,
  lng: -47.846232044294226,
};

const collectPoints = [
  {
    lat: -24.489690375652348,
    lng: -47.84476447231329,
  },
  {
    lat: -24.500777106830338,
    lng: -47.85158935866204,
  },
  {
    lat: -24.48783801101713,
    lng: -47.85650521061934,
  },
  {
    lat: -24.488108008644193,
    lng: -47.858792129765405,
  },
  {
    lat: -24.48778864778539,
    lng: -47.84187754805501,
  },
  {
    lat: -24.510595326052414,
    lng: -47.83522514991089,
  },
  {
    lat: -24.49808840126225,
    lng: -47.8748510526804,
  },
];
const customIcon = {
  path: `M12 0C5.383 0 0 5.383 0 12s12 24 12 24 12-18.617 12-24S18.617 0 12 0zm0 17c-2.481 0-4-1.127-4-3s1.519-3 4-3s4 1.127 4 3s-1.519 3-4 3z`,
  fillColor: '#92e3a9',
  fillOpacity: 1,
  strokeWeight: 1,
  strokeColor: '#086f29',
  scale: 1,
};

export const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCYi_w8dxEi___n0D7X_vFoLKjwjeXTpus',
  });

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={14}
          options={{
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,

            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
              {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                  { hue: '#92e3a9' }, // Define a cor de matiz (hue) para elementos de paisagem
                  { saturation: 25 }, // Define a saturação (saturation) para elementos de paisagem
                ],
              },
            ],
          }}
        >
          {collectPoints.map((pnt) => {
            return (
              <Marker
                key={Math.random()}
                position={{ lat: pnt.lat, lng: pnt.lng }}
                icon={customIcon}
              />
            );
          })}
        </GoogleMap>
      ) : (
        <p>Não foi possível carregar o mapa</p>
      )}
    </Container>
  );
};
