export const getMyLocalization = () => {
  if ('geolocation' in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    alert('Utilize um navegador que possua recursos de geolocalização');
    return Promise.reject('Geolocalização não suportada pelo navegador');
  }
};
