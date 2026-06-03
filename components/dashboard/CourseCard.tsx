"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Course } from "@/types";
import * as LucideIcons from "lucide-react";
import { MouseEvent } from "react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Pure monochrome luxury spotlight definitions
  const backgroundSpotlight = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.03),
      transparent 80%
    )
  `;

  const borderSpotlight = useMotionTemplate`
    radial-gradient(
      150px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.2),
      transparent 80%
    )
  `;

  const formattedIconName =
    course.icon_name.charAt(0).toUpperCase() + course.icon_name.slice(1);
  const Icon = (LucideIcons as any)[formattedIconName] || LucideIcons.Book;

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-900 bg-neutral-950/40 p-6 shadow-2xl"
    >
      {/* Dynamic Inner Monochrome Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: backgroundSpotlight }}
      />

      {/* Sharp Stark Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] z-0 rounded-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: borderSpotlight,
          maskImage:
            "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          WebkitMaskImage:
            "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-600 transition-colors duration-300">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="mb-4 text-sm font-normal tracking-tight text-neutral-400 group-hover:text-neutral-100 transition-colors duration-300">
          {course.title}
        </h3>

        <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5 font-mono">
          <span>PROGRESS</span>
          <span className="text-neutral-400 group-hover:text-white font-medium">
            {course.progress}%
          </span>
        </div>

        <div className="h-[2px] w-full overflow-hidden bg-neutral-900">
          <motion.div
            className="h-full bg-gradient-to-r from-neutral-400 to-white"
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
