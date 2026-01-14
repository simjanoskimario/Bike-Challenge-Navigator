import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tent, Droplets, Coffee, Filter, Star, Wrench } from 'lucide-react';

const allLocations = [
  { id: 1, name: 'Pine Ridge Camp', type: 'camp', distance: '12km', rating: 4.8, amenities: ['water', 'fire'], icon: Tent, color: 'text-emerald-400' },
  { id: 2, name: 'Mountain Spring', type: 'water', distance: '8km', rating: 4.9, amenities: ['fresh'], icon: Droplets, color: 'text-blue-400' },
  { id: 3, name: 'River Bend Spot', type: 'camp', distance: '24km', rating: 4.5, amenities: ['water'], icon: Tent, color: 'text-emerald-400' },
  { id: 4, name: 'Trail Cafe', type: 'rest', distance: '5km', rating: 4.7, amenities: ['food', 'wifi'], icon: Coffee, color: 'text-amber-400' },
  { id: 5, name: 'Creek Water Point', type: 'water', distance: '15km', rating: 4.6, amenities: ['fresh'], icon: Droplets, color: 'text-blue-400' },
  { id: 6, name: 'Bike Shop Valley', type: 'repair', distance: '10km', rating: 4.8, amenities: ['tools', 'parts'], icon: Wrench, color: 'text-slate-400' },
  { id: 7, name: 'Mountain Shelter', type: 'rest', distance: '8km', rating: 4.2, amenities: ['roof'], icon: Coffee, color: 'text-amber-400' }
];

export function CampingView({ onSelectLocation }: { onSelectLocation: (location: any) => void }) {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: Filter },
    { id: 'camp', label: 'Campsites', icon: Tent },
    { id: 'water', label: 'Water', icon: Droplets },
    { id: 'rest', label: 'Rest Stops', icon: Coffee },
    { id: 'repair', label: 'Repair', icon: Wrench }
  ];

  const filteredLocations = filter === 'all' ? allLocations : allLocations.filter(loc => loc.type === filter);

  return (
    <div className="h-full bg-[#0F1419] pt-20 px-4 overflow-y-auto pb-24">
      
      {/* Map Preview Container */}
      <div className="h-48 rounded-2xl bg-slate-800/50 border border-slate-700 mb-6 flex items-center justify-center relative overflow-hidden">
        {/* Dark Map Tiles Background */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/14/8192/5461.png')] bg-cover" />
        
        {/* Fixed Image Path: This points to /public/res/image.png */}
        <img 
            src="https://www.placesofjuma.com/wp-content/uploads/2020/12/Pula-1-scaled.jpg" 
            alt="Pula Map" 
            className="relative z-10 w-full h-full object-cover" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hides broken icon if file is missing
        />
      </div>

      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-1">Camping trip to Pula</h1>
          <p className="text-slate-400 text-sm">Bike where once gladiators used to walk</p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Explore the historic trails of Pula. From coastal paths to dense pine forests, 
            this route offers the perfect blend of history and nature for every rider.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-4 no-scrollbar">
        {filters.map(f => (
          <button 
            key={f.id} 
            onClick={() => setFilter(f.id)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                filter === f.id ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-800/50 border-slate-700 text-slate-400'
            }`}
          >
            <f.icon size={14} />
            <span className="text-sm font-medium">{f.label}</span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
          {filter === 'all' ? 'All Locations' : `${filters.find(f => f.id === filter)?.label} (${filteredLocations.length})`}
        </h3>
        {filteredLocations.map((site, i) => (
          <motion.div 
            key={site.id} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.05 }} 
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 active:scale-[0.98] transition-transform cursor-pointer" 
            onClick={() => onSelectLocation(site)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-slate-700/50 ${site.color}`}>
                  <site.icon size={20} />
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold">{site.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="capitalize">{site.type}</span>
                    <span>•</span>
                    <span>{site.distance} away</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                <Star size={12} fill="currentColor" />
                {site.rating}
              </div>
            </div>

            <div className="flex gap-2 mt-3 pl-[52px]">
              {site.amenities.map(a => (
                <span key={a} className="text-[10px] px-2 py-1 rounded bg-slate-700/50 text-slate-300 capitalize">
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}