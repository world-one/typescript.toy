import React, { FC, useEffect, useState } from 'react';
import ReactMapGL, { Layer, LayerProps, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { FeatureCollection } from 'geojson';

const LAYER_ID = 'testLayer'
const Map: FC = () => {
    const [map, setMap] = useState<mapboxgl.Map>();
    const [viewport, setViewport] = useState({
        width: 800,
        height: 800,
        latitude: 37.4843926,
        longitude: 127.035387,
        zoom: 16,
      });

    // useEffect(() => {
    //     if (!map) return;
    //     map.addSource(LAYER_ID, {
    //         type: 'geojson',
    //         data: gangnamGeoJson,
    //     });

    //     map.addLayer({
    //         id: `${LAYER_ID}-line`,
    //         source: LAYER_ID,
    //         type: 'line',
    //         paint: {
    //             'line-color': 'yellow',
    //             'line-width': 12,
    //         },
    //     }).addLayer({
    //         id: `${LAYER_ID}-fill`,
    //         source: LAYER_ID,
    //         type: 'fill',
    //         paint: {
    //             'fill-color': 'coral',
    //         },
    //     })
    // },[])
      
    return (
    <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
        onLoad={(e) => {
            setMap(e.target);
        }}
        onClick={(e) => {
            console.log(e);
        }}
    >
        <Source
         id={LAYER_ID}
         type={'geojson'} 
         data={gangnamGeoJson as FeatureCollection} />
        <Layer
            {...LAYER_LINE_PROPS}
        />
        <Layer
            {...LAYER_FILL_PROPS}
        />
    </ReactMapGL>
    );
}

export default Map;

const LAYER_LINE_PROPS: LayerProps = {
    id: `${LAYER_ID}-line`,
    source: LAYER_ID,
    type: 'line',
    paint: {
        'line-color': 'yellow',
        'line-width': 12,
    },
};

const LAYER_FILL_PROPS: LayerProps = {
    id: `${LAYER_ID}-fill`,
    source: LAYER_ID,
    type: 'fill',
    paint: {
        'fill-color': 'coral',
        'fill-opacity': 0.4
    },
};

const gangnamGeoJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                127.01944104956,
                37.5159872416407
              ],
              [
                127.017073602424,
                37.5228869286294
              ],
              [
                127.011868114871,
                37.5278410044609
              ],
              [
                127.020924412345,
                37.5351193568061
              ],
              [
                127.021564918499,
                37.5355309658779
              ],
              [
                127.02569978439,
                37.5378641101156
              ],
              [
                127.028283460348,
                37.5385279110979
              ],
              [
                127.029856845949,
                37.5388643061658
              ],
              [
                127.045961692342,
                37.5325029266663
              ],
              [
                127.049058425592,
                37.5325521531823
              ],
              [
                127.056566563764,
                37.5291011729087
              ],
              [
                127.06526490617,
                37.5256035198891
              ],
              [
                127.066961859022,
                37.5250813927543
              ],
              [
                127.068463142507,
                37.5102843476137
              ],
              [
                127.06880349803,
                37.510002789362
              ],
              [
                127.069806450009,
                37.5050444657274
              ],
              [
                127.073181326113,
                37.5021306111568
              ],
              [
                127.075490888551,
                37.5012004654053
              ],
              [
                127.08362899995,
                37.4992644635668
              ],
              [
                127.090470002615,
                37.4974732494218
              ],
              [
                127.096740694648,
                37.4958308624023
              ],
              [
                127.101965306368,
                37.4936378121149
              ],
              [
                127.108139645464,
                37.4893095996712
              ],
              [
                127.111035420645,
                37.4829350440249
              ],
              [
                127.120537817403,
                37.4703783820651
              ],
              [
                127.122293371858,
                37.4652135424641
              ],
              [
                127.117460489781,
                37.4621716566575
              ],
              [
                127.116747131876,
                37.4585942966954
              ],
              [
                127.10630703066,
                37.4625383858675
              ],
              [
                127.10350183559,
                37.4596254786902
              ],
              [
                127.096317631286,
                37.4614320213705
              ],
              [
                127.086211665679,
                37.4703634799763
              ],
              [
                127.08516182671,
                37.4752733376514
              ],
              [
                127.077162387723,
                37.4750094652503
              ],
              [
                127.062531887836,
                37.4728424689481
              ],
              [
                127.06161166135,
                37.4689587404902
              ],
              [
                127.054527186752,
                37.468526631781
              ],
              [
                127.049580587996,
                37.470487492556
              ],
              [
                127.043942189842,
                37.4797104766474
              ],
              [
                127.041345846098,
                37.4855705278057
              ],
              [
                127.033967942909,
                37.4847972485938
              ],
              [
                127.03162325752,
                37.4895400767287
              ],
              [
                127.027635108078,
                37.4979643034211
              ],
              [
                127.024495838972,
                37.5045181074198
              ],
              [
                127.024470049205,
                37.5045718750576
              ],
              [
                127.020350039214,
                37.5108051989057
              ],
              [
                127.01944104956,
                37.5159872416407
              ]
            ]
          ]
        },
        "properties": {
          "0": "2",
          "1": "4"
        }
      }
    ]
  }