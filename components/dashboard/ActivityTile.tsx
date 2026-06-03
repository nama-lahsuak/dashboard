"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useMemo } from "react";

const SEED_PATTERN = [
  0, 1, 0, 2, 0, 3, 1, 0, 2, 1, 0, 0, 3, 2, 0, 1, 2, 0, 0, 1, 3, 0, 2, 1, 0, 2,
  0, 1, 0, 0, 2, 3, 1, 0, 0, 2, 1, 0, 3, 0, 1, 2,
];

export default function ActivityTile() {
  const activityData = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      intensity: SEED_PATTERN[i % SEED_PATTERN.length],
    }));
  }, []);

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-neutral-800";
      case 2:
        return "bg-neutral-600";
      case 3:
        return "bg-neutral-200";
      default:
        return "bg-neutral-950 border border-neutral-900/50";
    }
  };

  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-900 bg-neutral-950/40 p-5 shadow-xl"
    >
      {/* Header Context */}
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-xs font-medium tracking-tight text-neutral-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-neutral-400" />
          Daily Activity
        </h3>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center my-1">
        <div className="grid grid-flow-col grid-rows-5 gap-1 sm:gap-2 w-max">
          {activityData.map((day, index) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.002, duration: 0.2 }}
              // UPGRADE: Boosted dimensions from static 11px to 24px (sm:h-6 sm:w-6) on desktop
              className={`h-4 w-4 sm:h-6 sm:w-6 rounded-[3px] sm:rounded-[4px] transition-colors duration-300 ${getIntensityColor(day.intensity)}`}
            />
          ))}
        </div>
      </div>

      {/* Footer System Legend */}
      <div className="relative z-10 flex items-center justify-between border-t border-neutral-900/60 pt-2 font-mono text-[9px] text-neutral-600">
        <div className="flex items-center gap-1.5">
          <span>MIN</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-[1px] bg-neutral-950 border border-neutral-900" />
            <div className="h-2 w-2 rounded-[1px] bg-neutral-800" />
            <div className="h-2 w-2 rounded-[1px] bg-neutral-600" />
            <div className="h-2 w-2 rounded-[1px] bg-neutral-200" />
          </div>
          <span>MAX</span>
        </div>
      </div>
    </motion.article>
  );
}
