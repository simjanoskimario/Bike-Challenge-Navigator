import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MapView } from './components/MapView';
import { MobileHeader } from './components/MobileHeader';
import { BottomSheet } from './components/BottomSheet';
import { MobileRouteSheet } from './components/MobileRouteSheet';
import { MobileNav } from './components/MobileNav';
import { MapSearch } from './components/MapSearch';
import { ChallengesView } from './components/ChallengesView';
import { CampingView } from './components/CampingView';
import { ProfileView } from './components/ProfileView';
export function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showEuroVelo, setShowEuroVelo] = useState(false);
  const [commute, setCommute] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <div className="relative w-full h-screen overflow-hidden bg-[#0F1419] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --safe-top: env(safe-area-inset-top);
          --safe-bottom: env(safe-area-inset-bottom);
        }
        
        .pt-safe-top { padding-top: var(--safe-top, 20px); }
        .pb-safe-bottom { padding-bottom: var(--safe-bottom, 20px); }
        
        body {
          font-family: var(--font-sans);
          overscroll-behavior: none;
        }
        
        .font-mono {
          font-family: var(--font-mono);
        }
        
        /* Hide scrollbar for clean mobile look */
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Top Header - Only visible on Map view */}
      <AnimatePresence>
        {activeTab === 'map' && <MobileHeader onSearchClick={() => setIsSearchOpen(true)} />}
      </AnimatePresence>

      {/* Search Overlay */}
      <MapSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectIzola={() => setCommute(true)} />

      <main className="relative w-full h-full pb-16">
        {/* Map Layer - Always present but hidden when other tabs are active */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab !== 'map' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <MapView showEuroVelo={showEuroVelo} onToggleEuroVelo={() => setShowEuroVelo(!showEuroVelo)}
          commute={commute} 
         />
        </div>

        {/* Bottom Sheet for Route Info - Only on Map tab */}
        <AnimatePresence>
          {(activeTab === 'map' && commute) && <BottomSheet  isOpen={isSheetOpen} onClose={() => {setIsSheetOpen(false)
             setCommute(false)}}>
              <div>
                <MobileRouteSheet />
              </div>
            </BottomSheet>}
        </AnimatePresence>

        {/* Full Screen Views */}
        <AnimatePresence>
          {activeTab === 'challenges' && <div className="absolute inset-0 z-20 bg-[#0F1419]">
              <ChallengesView  onNavigateToCamping={() => setActiveTab('camping')} />
            </div>}
            
          
          {activeTab === 'camping' && <div className="absolute inset-0 z-20 bg-[#0F1419]">
            <CampingView onSelectLocation={(site) => {
              setActiveTab('map');
              setIsSheetOpen(true);
              // optionally: setSelectedLocation(site)
            }} /> 
            </div>}
          {activeTab === 'profile' && <div className="absolute inset-0 z-20 bg-[#0F1419]">
              <ProfileView />
            </div>}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Bar */}
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} isRiding={true} />
    </div>;
}