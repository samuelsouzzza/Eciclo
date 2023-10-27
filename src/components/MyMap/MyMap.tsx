import React from 'react';
import { Container } from './MyMap.styles.ts';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// key = AIzaSyAh8GQnWwpqvovFN4gUTGJjmhMvztCykJY

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
];

const customMarkerIcon = {
  path: 'M10 0 C4.48 0 0 4.48 0 10 C0 15.52 4.48 20 10 20 C15.52 20 20 15.52 20 10 C20 4.48 15.52 0 10 0 M10 18 C5.59 18 2 14.41 2 10 C2 5.59 5.59 2 10 2 C14.41 2 18 5.59 18 10 C18 14.41 14.41 18 10 18 Z',
  fillColor: '#92e3a9', // Cor de preenchimento
  fillOpacity: 1, // Opacidade do preenchimento
  scale: 3, // Tamanho do ícone
  strokeColor: 'green', // Cor da borda
  strokeWeight: 2, // Largura da borda
};

export const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAh8GQnWwpqvovFN4gUTGJjmhMvztCykJY',
  });

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={14}
        >
          {collectPoints.map((pnt) => {
            return (
              <Marker
                key={Math.random()}
                position={{ lat: pnt.lat, lng: pnt.lng }}
                icon={customMarkerIcon}
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
