import React from 'react';
import { Map, BarChart2, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
interface NavigationHeaderProps {
  view: 'map' | 'stats';
  onToggle: () => void;
}
export function NavigationHeader({
  view,
  onToggle
}: NavigationHeaderProps) {
  return <motion.header initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center pointer-events-none">
      {/* Logo / Title */}
      <div className="pointer-events-auto flex items-center gap-2 backdrop-blur-xl bg-black/40 border border-white/10 px-4 py-2 rounded-full">
        <div className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
        <span className="text-white font-medium tracking-wider text-sm">
          NAV-01
        </span>
      </div>

      {/* View Toggle */}
      <div className="pointer-events-auto flex items-center gap-1 backdrop-blur-xl bg-black/40 border border-white/10 p-1 rounded-full">
        <button onClick={view === 'stats' ? onToggle : undefined} className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-colors ${view === 'map' ? 'text-black' : 'text-white/60 hover:text-white'}`}>
          {view === 'map' && <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#00f0ff] rounded-full" transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6
        }} />}
          <span className="relative z-10 flex items-center gap-2">
            <Map size={14} />
            <span className="font-medium">Map</span>
          </span>
        </button>
  
      </div>

      {/* Menu Button */}
      <button className="pointer-events-auto backdrop-blur-xl bg-black/40 border border-white/10 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors">
        <Menu size={20} />
      </button>
    </motion.header>;
}