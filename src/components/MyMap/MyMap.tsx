import React from 'react';
import { Container } from './MyMap.styles.ts';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { collectPoints } from '../../utils/collectPoints.ts';
import { getMyLocalization } from '../../utils/getMyLocalization.ts';
import { ICoordenates } from '../../@types/types';

const customIcon = {
  path: `M12 0C5.383 0 0 5.383 0 12s12 24 12 24 12-18.617 12-24S18.617 0 12 0zm0 17c-2.481 0-4-1.127-4-3s1.519-3 4-3s4 1.127 4 3s-1.519 3-4 3z`,
  fillColor: '#92e3a9',
  fillOpacity: 1,
  strokeWeight: 1,
  strokeColor: '#086f29',
  scale: 1,
};

export const MyMap = () => {
  React.useEffect(() => {
    getMyLocalization().then((coord: any) => {
      if (coord instanceof Error) {
        console.error('Erro ao obter a localização:', coord);
      } else {
        setMyPosition(coord);
      }
    });
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_KEY_GOOGLE,
  });

  const [myPosition, setMyPosition] = React.useState<
    ICoordenates | undefined
  >();

  if (!myPosition) {
    return <p>Obtendo localização...</p>;
  }

  const center = {
    lat: myPosition.lat,
    lng: myPosition.lng,
  };

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
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
                stylers: [{ hue: '#92e3a9' }, { saturation: 25 }],
              },
            ],
          }}
        >
          <Marker key={Math.random()} position={center} />
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
