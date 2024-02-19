import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

type Props = {};

const Map = (props: Props) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  const getUserLocation = async () => {
    return new Promise<{ lat: number; long: number }>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userPosition = {
              lat: position.coords.latitude,
              long: position.coords.longitude
            };
            resolve(userPosition);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("La géolocalisation n'est pas prise en charge par votre navigateur."));
      }
    });
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        const userPosition = await getUserLocation();
        // console.log('Coordonnées de l\'utilisateur :', userPosition);

        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          version: 'weekly'
        });

        const { Map } = await loader.importLibrary('maps');
        const Position = {
            lat: 43.642693,
            lng:-79.3871189,
        }
        const mapOptions:google.maps.MapOptions={
            center:Position,
            zoom:17,
            mapId:'MY_NEXTJS_MAPID'
        }

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      } catch (error) {
        console.error('Erreur de géolocalisation :', error);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: '600px' }} className='rounded-xl' />;
};

export default Map;
