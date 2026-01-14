import React from 'react';
import { Map, House, Bike, User } from 'lucide-react';
import { motion } from 'framer-motion';
interface MobileNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isRiding?: boolean;
}
export function MobileNav({
  activeTab,
  onTabChange,
  isRiding = false
}: MobileNavProps) {
  const tabs = [{
    id: 'challenges',
    icon: House,
    label: 'Home'
  }, {
    id: 'map',
    icon: Map,
    label: 'Map'
    
  }, {
    id: 'camping',
    icon: Bike,
    label: 'Trip'
  }, {
    id: 'profile',
    icon: User,
    label: 'Profile'
  }];
  return <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F1419]/90 backdrop-blur-xl border-t border-white/5 pb-safe-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => onTabChange(tab.id)} className="relative flex flex-col items-center justify-center w-16 h-full gap-1">
              {isActive && <motion.div layoutId="nav-indicator" className="absolute -top-[1px] w-8 h-[3px] bg-emerald-500 rounded-full" />}

              <div className="relative">
                <tab.icon size={20} className={`transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                {/* Riding Indicator on Map Tab */}
                {tab.id === 'map' && isRiding && <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>}
              </div>

              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                {tab.label}
              </span>
            </button>;
      })}
      </div>
    </div>;
}