import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = { center: [43.672550, 40.295703], zoom: 14 };

function YandexMap() {
  return(
    <div className="yMap">
      <YMaps>
        <Map state={mapState}>
          <Placemark

            properties={{
              hintContent: 'we are waiting for you here in our shop',
              balloonContent: ''
            }}
          />
        </Map>
      </YMaps>
    </div>
  )
}

export default YandexMap;