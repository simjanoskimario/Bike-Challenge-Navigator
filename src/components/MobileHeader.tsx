import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';
interface MobileHeaderProps {
  onSearchClick: () => void;
}
export function MobileHeader({
  onSearchClick
}: MobileHeaderProps) {
  return <motion.header 
  // ... your other props
  className="fixed top-0 left-0 right-0 z-30 pt-safe-top px-4 pb-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
>
  {/* Main Container: justify-between pushes content to opposite ends */}
  <div className="flex items-center justify-between w-full">
    
    {/* Left Side: Logo/Title (Wraps your CycleGO text) */}
    <div className="pointer-events-auto">
       {/* Your <h1 className="...">CycleGO</h1> goes here */}
    </div>

    {/* Right Side: Actions */}
    <div className="flex items-center gap-3 pointer-events-auto">
      <button 
        onClick={onSearchClick} 
        className="w-10 h-10 mt-3 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
      >
        <Search size={20} />
      </button>
    </div>

  </div>
</motion.header>
}