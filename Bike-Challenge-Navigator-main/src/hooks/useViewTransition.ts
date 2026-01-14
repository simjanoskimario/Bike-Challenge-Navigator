import { useState } from 'react';
export type ViewMode = 'map' | 'stats';
export function useViewTransition() {
  const [view, setView] = useState<ViewMode>('map');
  const toggleView = () => {
    setView(prev => prev === 'map' ? 'stats' : 'map');
  };
  return {
    view,
    toggleView,
    setView
  };
}