"use client";

import { motion } from "framer-motion";
import { Course } from "@/types";
import CourseCard from "./CourseCard";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import { Variants } from "framer-motion";

interface BentoGridProps {
  courses: Course[];
}

// Framer Motion Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This satisfies the staggered load requirement
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
    >
      {/* Hero Tile spanning multiple columns */}
      <motion.div
        variants={itemVariants}
        className="col-span-1 md:col-span-2 lg:col-span-2"
      >
        <HeroTile />
      </motion.div>

      {/* Map through the server-fetched Supabase data */}
      {courses.map((course) => (
        <motion.div variants={itemVariants} key={course.id}>
          <CourseCard course={course} />
        </motion.div>
      ))}

      {/* Activity Tile */}

      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
        <ActivityTile />
      </motion.div>
    </motion.section>
  );
}
