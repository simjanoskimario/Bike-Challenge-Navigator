import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Layers } from 'lucide-react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// Fix Leaflet icons
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// Morning Commute Path (Blue)
const morningCommutePath: [number, number][] = [
  [45.5488, 13.7301], // Koper Center
  [45.5465, 13.730], // Semedela
  [45.5430, 13.7320], // Coastal Path (Parenzana)
  [45.5430, 13.7120], // Coastal Path (Parenzana)

  [45.5400, 13.6850], // Entering Izola
  [45.5395, 13.6650], // Izola Marina
  [45.5410, 13.6580]  // Izola Old Town
];// EuroVelo Routes

// EuroVelo Routes - EV9 passes through Slovenia to the coast
const euroVeloRoutes = [{
  id: 'EV9',
  name: 'Amber Route (Baltic–Adriatic)',
  color: '#F59E0B',
  path: [
    [45.5550, 13.7500], 
    [45.5488, 13.7301], 
    [45.5350, 13.7100], 
    [45.5150, 13.6900]
  ]
}];

// Saved Places with Images - Real landmarks in Koper/Izola
const savedPlaces = [{
  id: 1,
  name: 'Praetorian Palace',
  note: 'Main square of Koper',
  pos: [45.5483, 13.7296],
  icon: 'palace',
  image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxY2_Lz_zpKr5pYLWfvokreUUMtvGIqgEPI2A85OMipIlnPNwi-UhwoIupTnIaysm9zq35_obH1NK7GXvd2LreT4NMPk9Q9i-oEMRR5CBlNPxSC5E3s0NItoyr1tevf_nmk6yiQog=s680-w680-h510-rw'
}, {
  id: 2,
  name: 'Svetilnik Beach',
  note: 'Best sunset in Izola',
  pos: [45.5430, 13.6550],
  icon: 'beach',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLrqwlI5KWq2yahYGPGUEaBSOQliNWUl1Gg&s'
}, {
  id: 3,
  name: 'Sečovlje Salt Pans',
  note: 'Famous salt fields nearby',
  pos: [45.4920, 13.6120],
  icon: 'nature',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQrgN9Y2wc-957tyCVwKMPw669KaukTPk3A&s'
}];

export function MapView({
  commute=false,
  showEuroVelo = false,
  onToggleEuroVelo
}: {
  commute?: boolean;
  showEuroVelo?: boolean;
  onToggleEuroVelo?: () => void;
}) {
  return <div className="absolute inset-0 z-0 bg-[#0F1419]">
      <MapContainer center={[45.5488, 13.7301]} zoom={14} scrollWheelZoom={true} zoomControl={false} className="w-full h-full" style={{
      background: '#0F1419'
    }}>
        {/* Dark Tiles */}
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

        {/* Morning Commute Path (Blue) */}
        {commute==true? <Polyline positions={morningCommutePath} pathOptions={{
        color: '#0EA5E9',
        weight: 4,
        opacity: 0.8,
        lineCap: 'round'
      }} />:null}

        {/* EuroVelo Layer */}
        {showEuroVelo && euroVeloRoutes.map(route => <Polyline key={route.id} positions={route.path as [number, number][]} pathOptions={{
        color: route.color,
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10',
        lineCap: 'round'
      }}>
              <Popup>
                <div className="text-sm font-bold text-amber-500">
                  {route.id}
                </div>
                <div className="text-xs text-slate-300">{route.name}</div>
              </Popup>
            </Polyline>)}

        {/* Saved Places with Images */}
        {commute == true && savedPlaces.map(place => <Marker key={place.id} position={place.pos as [number, number]}>
            <Popup maxWidth={300}>
              <div className="p-2">
                <img src={place.image} alt={place.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                <div className="font-bold text-emerald-400 mb-1">
                  {place.name}
                </div>
                <div className="text-xs text-slate-400">{place.note}</div>
              </div>
            </Popup>
          </Marker>)}
      </MapContainer>

      {/* Map Controls */}
      <div className="absolute top-20 right-4 flex flex-col gap-2 z-[400]">
        <button onClick={onToggleEuroVelo} className={`p-3 rounded-full backdrop-blur-md border transition-colors ${showEuroVelo ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 'bg-slate-900/80 border-white/10 text-slate-400'}`}>
          <Layers size={20} />
        </button>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,20,25,0.6)_100%)] z-[400]" />
    </div>;
}