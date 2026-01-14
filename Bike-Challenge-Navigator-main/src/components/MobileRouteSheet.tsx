import React from 'react';
import { Navigation, Clock, Zap, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function MobileRouteSheet() {
  return <div className="flex flex-col h-full">
      {/* Header Section - Always visible when collapsed */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Morning Commute
            </h2>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} />
              <span>To: Downtown Office</span>
            </div>
          </div>
          <button className="w-12 h-12 rounded-full bg-[#00f0ff] text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95 transition-transform">
            <Navigation size={24} fill="currentColor" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="text-xs text-white/40 uppercase mb-1">Dist</div>
            <div className="text-xl font-mono font-bold text-white">
              12.4<span className="text-xs text-white/40 ml-1">km</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="text-xs text-white/40 uppercase mb-1">Time</div>
            <div className="text-xl font-mono font-bold text-white">
              18<span className="text-xs text-white/40 ml-1">min</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="text-xs text-white/40 uppercase mb-1">Avg</div>
            <div className="text-xl font-mono font-bold text-white">
              42<span className="text-xs text-white/40 ml-1">km/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div className="space-y-4 pb-8">
        <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mt-6 mb-2">
          Upcoming Turns
        </h3>

        {[{
        dist: '200m',
        action: 'Turn Right',
        street: 'Market Street',
        icon: 'rightarrow'
      }, {
        dist: '1.2km',
        action: 'Keep Left',
        street: 'Bike Highway',
        icon: 'arrow-up-left'
      }, {
        dist: '3.5km',
        action: 'Destination',
        street: 'Tech Hub',
        icon: 'pin'
      }].map((turn, i) => <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] font-mono text-xs font-bold">
              {turn.dist}
            </div>
            <div className="flex-1">
              <div className="text-white font-medium">{turn.action}</div>
              <div className="text-white/40 text-sm">{turn.street}</div>
            </div>
            <ChevronRight size={16} className="text-white/20" />
          </div>)}

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/20 to-transparent border border-[#00f0ff]/20">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={18} className="text-[#00f0ff]" />
            <span className="text-[#00f0ff] font-medium">Daily Challenge</span>
          </div>
          <p className="text-white/80 text-sm mb-3">
            Maintain 25km/h average speed for the next 5km to earn the "Speed
            Demon" badge.
          </p>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-[#00f0ff]" />
          </div>
        </div>
      </div>
    </div>;
}