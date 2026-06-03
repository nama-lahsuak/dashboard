"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroTile() {
  return (
    <article className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-900 bg-neutral-950/40 p-8 shadow-2xl">
      {/* Subtle monochrome background depth glow */}
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <h2 className="mt-6 text-3xl font-light tracking-tight text-neutral-400 md:text-4xl">
          Welcome back, <br className="hidden md:block" />
          <span className="font-normal text-white">Aman</span>
        </h2>
      </div>

      {/* Industrial Streak Badge */}
      <div className="relative z-10 mt-8 flex items-center gap-3 w-max rounded-xl bg-black border border-neutral-900 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
          {/* Subtle pulse animation on the icon using hardware-accelerated opacity */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Flame className="h-4 w-4 text-white" />
          </motion.div>
        </div>
        <div className="font-mono">
          <p className="text-[9px] text-neutral-500 font-medium tracking-wider uppercase">
            STREAK_ENGINE
          </p>
          <p className="text-sm font-medium text-neutral-200">14_DAYS</p>
        </div>
      </div>
    </article>
  );
}
