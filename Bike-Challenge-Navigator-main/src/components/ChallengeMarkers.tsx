import React from 'react';
import { Marker, Popup, CircleMarker } from 'react-leaflet';
import { divIcon } from 'leaflet';
// Custom pulsing icon using CSS classes (we'll define these in App.tsx or global css)
const createPulseIcon = () => divIcon({
  className: 'custom-marker',
  html: `
    <div class="relative w-4 h-4">
      <div class="absolute inset-0 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
      <div class="absolute inset-0 bg-[#00f0ff] rounded-full animate-ping opacity-75"></div>
    </div>
  `,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});
const challenges = [{
  id: 1,
  lat: 51.505,
  lng: -0.09,
  title: 'Sprint Segment',
  type: 'Speed'
}, {
  id: 2,
  lat: 51.51,
  lng: -0.1,
  title: 'Hill Climb',
  type: 'Elevation'
}, {
  id: 3,
  lat: 51.515,
  lng: -0.09,
  title: 'Endurance Test',
  type: 'Stamina'
}];
export function ChallengeMarkers() {
  return <>
      {challenges.map(challenge => <Marker key={challenge.id} position={[challenge.lat, challenge.lng]} icon={createPulseIcon()}>
          <Popup className="custom-popup">
            <div className="p-2 min-w-[120px]">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">
                {challenge.type}
              </div>
              <div className="text-sm font-bold text-gray-900">
                {challenge.title}
              </div>
            </div>
          </Popup>
        </Marker>)}
    </>;
}