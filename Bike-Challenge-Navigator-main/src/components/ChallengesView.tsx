import { motion } from 'framer-motion';
import { Users, Mountain, Map, ArrowRight, Zap, Trophy, Heart, Coffee, Bike, SectionIcon } from 'lucide-react';
export function ChallengesView({ onNavigateToCamping }: { onNavigateToCamping: () => void }) {
  
  const forYouChallenges = [
    {
      title: 'Morning Streak',
      desc: 'Ride 5 days in a row before 9 AM',
      progress: 3,
      total: 5,
      icon: Zap,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10'
    },
    {
      title: 'Local Legend',
      desc: 'Complete 10 laps of your favorite local circuit',
      progress: 7,
      total: 10,
      icon: Trophy,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Endurance Build',
      desc: 'Single longest ride of the week (Goal: 40km)',
      progress: 28,
      total: 40,
      icon: Bike,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Sprint Master',
      desc: 'Hit a top speed of 45km/h on a flat segment',
      progress: 42,
      total: 45,
      icon: Zap,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10'
    },
    {
      title: 'Coffee Commute',
      desc: '3 low-intensity rides to clear your mind',
      progress: 1,
      total: 3,
      icon: Coffee,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10'
    }
  ];

  // 2. "Family & Group" - Collaborative goals (4 Challenges)
  const groupChallenges = [
    {
      title: 'Cross-Country Team',
      desc: 'Ride 500km collectively this month',
      progress: 342,
      total: 500,
      members: 4,
      icon: Map,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Summit Seekers',
      desc: 'Climb 2000m elevation together',
      progress: 1250,
      total: 2000,
      members: 3,
      icon: Mountain,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Family Century',
      desc: 'Complete 100 total hours of family riding',
      progress: 62,
      total: 100,
      members: 5,
      icon: Users,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    {
      title: 'Heartbeat Heroes',
      desc: 'Burn 10,000 calories as a group',
      progress: 7200,
      total: 10000,
      members: 4,
      icon: Heart,
      color: 'text-red-400',
      bg: 'bg-red-500/10'
    }
  ];

  // Helper to render the scrollable row
  const ChallengeRow = ({ title, subtitle, data, icon: SectionIcon, iconColor }) => (
    <div className="mb-10">
      <div className="flex justify-between items-end mb-4 px-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <SectionIcon className={iconColor} size={24} /> {title}
          </h2>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
        <button className="text-xs text-slate-500 hover:text-emerald-400 transition-colors">View All</button>
      </div>

      {/* The Sliding Container */}
      <div className="flex gap-4 overflow-x-auto pb-6 px-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
        {data.map((challenge, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.1 }}
    className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-center relative overflow-hidden border border-slate-700/50 rounded-2xl p-5 flex flex-col justify-between min-h-[400px]"
  >
    {/* 1. BACKGROUND IMAGE LAYER */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('../res/image.png')` }}
    />

    {/* 2. GRADIENT OVERLAY LAYER */}
    <div 
      className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/40 via-slate-900/100 to-[#0F1419]" 
    />

    {/* 3. CONTENT LAYER (Everything must be inside here) */}
    <div className="relative z-20 flex flex-col h-full justify-between">
      
      {/* Top Section: Icons & Info */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl backdrop-blur-md ${challenge.bg} ${challenge.color}`}>
            <challenge.icon size={24} />
          </div>
          {challenge.members && (
            <div className="flex -space-x-2">
              {[...Array(challenge.members)].map((_, idx) => (
                <div key={idx} className="w-7 h-7 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
                  {String.fromCharCode(65 + idx)}
                </div>
              ))}
            </div>
          )}
        </div>
        <h3 className="text-white pt-5 font-bold text-lg drop-shadow-md">{challenge.title}</h3>
        <p className="text-slate-300 text-sm mb-6 line-clamp-2">{challenge.desc}</p>
      </div>
        <p className="text-slate-300 text-sm mb-6 line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ex quibusdam, laudantium nisi necessitatibus nemo inventore voluptas voluptatum rerum vero.</p>
      {/* Bottom Section: Progress & Button */}
      <div className="space-y-2 pb-10">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-slate-400 uppercase tracking-wider">Progress</span>
          <span className={challenge.color}>{Math.round(challenge.progress / challenge.total * 100)}%</span>
        </div>
        
        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }} 
            className={`h-full ${challenge.color.replace('text', 'bg')}`} 
          />
        </div>

        <div className="flex justify-between items-center pt-1">
           <span className="text-[10px] text-slate-500 font-mono">{challenge.total} km Goal</span>
        </div>

        <motion.button
          onClick={onNavigateToCamping}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group w-full mt-2 overflow-hidden rounded-2xl bg-emerald-500 p-[1px] transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          <div className="relative flex items-center justify-center gap-3 rounded-[15px] bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
            <span className="text-sm font-black uppercase italic tracking-wider text-slate-900">
              Start Ride
            </span>
            <ArrowRight className="text-slate-900" size={18} strokeWidth={3} />
            
            <motion.div 
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-2xl bg-emerald-400 z-[-1]"
            />
          </div>
        </motion.button>
      </div>
    </div>
  </motion.div>
))}



        
      </div>
    </div>
  );


  return (
    <div className="h-full bg-[#0F1419] pt-20 overflow-y-auto pb-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-8 px-4">
        <div>
          <div className="flex align-items-center gap-2 mb-2">
            <h1 className="text-5xl font-bold text-slate-100 mb-1 tracking-tight">CycleGO</h1>
            <Bike className="text-emerald-400" size={52} />
          </div>
          
          <br />

          <h3 className="text-3xl font-bold text-slate-100 mb-1 tracking-tight">Recommended rides</h3>
          <p className="text-slate-400 text-sm">Push your limits today</p>
        </div>
        <button className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2 hover:bg-emerald-500/20 transition-all">
          <Users size={14} /> Invite Family
        </button>
      </div>

      {/* Row 1: Personalized */}
      <ChallengeRow 
        title="For You" 
        subtitle="Based on your recent activity" 
        data={forYouChallenges} 
        icon={Zap} 
        iconColor="text-yellow-400" 
      />

      {/* Row 2: Family/Co-op */}
      <ChallengeRow 
        title="For you and your family" 
        subtitle="Achieve more together" 
        data={groupChallenges} 
        icon={Users} 
        iconColor="text-emerald-400" 
      />
    </div>
  );
}
