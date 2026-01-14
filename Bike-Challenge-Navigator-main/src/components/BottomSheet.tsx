import React from 'react';
import { motion, PanInfo, useAnimation } from 'framer-motion';
interface BottomSheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  minHeight?: string;
  maxHeight?: string;
}
export function BottomSheet({
  children,
  isOpen,
  onClose,
  minHeight = '120px',
  maxHeight = '85vh'
}: BottomSheetProps) {
  const controls = useAnimation();
  // Drag end handler to snap to positions
  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.y > threshold && onClose) {
      onClose();
    } else {
      controls.start({
        y: 0
      });
    }
  };
  return <motion.div initial={{
    y: 'calc(100% - 120px)'
  }} animate={isOpen ? {
    y: 0
  } : {
    y: 'calc(100% - 120px)'
  }} drag="y" dragConstraints={{
    top: 0,
    bottom: 0
  }} dragElastic={0.2} onDragEnd={onDragEnd} className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] border-t border-white/10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]" style={{
    height: maxHeight,
    touchAction: 'none'
  }}>
      {/* Drag Handle */}
      <div className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
        <div className="w-12 h-1.5 bg-white/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="h-full overflow-y-auto px-6 pb-24 custom-scrollbar">
        {children}
      </div>
    </motion.div>;
}