import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Users, Trophy, Clock, Flag } from 'lucide-react';
interface MapSearchProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MapSearch({
  onSelectIzola,
  isOpen,
  onClose
}: MapSearchProps) {
  const [query, setQuery] = useState('');
  const categories = [{
    icon: Users,
    label: 'Family',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }, {
    icon: Trophy,
    label: 'Challenges',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  }, {
    icon: MapPin,
    label: 'Routes',
    color: 'text-[#00f0ff]',
    bg: 'bg-[#00f0ff]/10'
  }];
  const recentSearches = [{
    icon: MapPin,
    label: 'Izola',
    sub: '5.5km • Easy'
  }, {
    icon: MapPin,
    label: "Piran",
    sub: '15.5km • Medium'
  }, {
    icon: Flag,
    label: 'Italy',
    sub: 'Challenge • 2 days left'
  }];
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl pt-safe-top px-4">
          <div className="flex items-center gap-3 pt-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search places, friends, challenges..." className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00f0ff]/50 transition-colors" autoFocus />
            </div>
            <button onClick={onClose} className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white active:scale-95 transition-transform">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                Categories
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(cat => <button key={cat.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 whitespace-nowrap active:scale-95 transition-transform">
                    <div className={`p-1 rounded-full ${cat.bg} ${cat.color}`}>
                      <cat.icon size={14} />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {cat.label}
                    </span>
                  </button>)}
              </div>
            </div>

            {/* Recent Searches */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  Recent
                </h3>
                <button className="text-xs text-[#00f0ff]">Clear</button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((item, i) => <motion.button 
                onClick={() => {
                  if (item.label === 'Izola') {
                    onSelectIzola(); // Activate path
                  }
                  onClose(); // Close search overlay
                }}
             key={i} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: i * 0.05
            }} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors text-left">
                    <div className="p-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-white/60">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium">{item.label}</div>
                      <div className="text-xs text-white/40">{item.sub}</div>
                    </div>
                    <div className="ml-auto text-white/20">
                      <Clock size={14} />
                    </div>
                  </motion.button>)}
              </div>
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
}