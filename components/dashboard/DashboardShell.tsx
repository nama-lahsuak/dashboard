"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import BentoGrid from "./BentoGrid";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types";
import { BookOpen, BarChart3, Clock, Trophy } from "lucide-react";

interface DashboardShellProps {
  courses: Course[];
}

export default function DashboardShell({ courses }: DashboardShellProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-black text-zinc-50 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-6 md:p-10 overflow-y-auto pb-24 md:pb-10">
        <AnimatePresence mode="wait">
          {/* 1. DASHBOARD VIEW */}
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <header className="mb-8 mt-4">
                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome back, <span className="text-zinc-400">Student</span>
                </h1>
                <p className="text-zinc-500 mt-2">
                  Ready to continue your learning journey?
                </p>
              </header>
              <BentoGrid courses={courses} />
            </motion.div>
          )}

          {/* 2. DEDICATED COURSES VIEW */}
          {activeTab === "courses" && (
            <motion.section
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <header className="mb-8 mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-100 flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-indigo-400" />
                  Your Enrolled Courses
                </h1>
                <p className="text-zinc-500 mt-2">
                  Track your active academic modules and curriculum
                  requirements.
                </p>
              </header>

              {/* Grid dedicated strictly to showing full-screen focus on courses */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </motion.section>
          )}

          {/* 3. DEDICATED ACTIVITY & ANALYTICS VIEW */}
          {activeTab === "activity" && (
            <motion.section
              key="activity"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <header className="mb-8 mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-100 flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-indigo-400" />
                  Performance Analytics
                </h1>
                <p className="text-zinc-500 mt-2">
                  Detailed metrics tracking your study consistency and
                  milestones.
                </p>
              </header>

              {/* Micro-Metrics Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/15 rounded-xl">
                    <Clock className="text-indigo-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                      Study Time
                    </p>
                    <p className="text-xl font-bold text-zinc-200">
                      32.5 Hours
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/15 rounded-xl">
                    <Trophy className="text-emerald-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                      Tasks Done
                    </p>
                    <p className="text-xl font-bold text-zinc-200">
                      18 Modules
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-purple-500/15 rounded-xl">
                    <BookOpen className="text-purple-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                      Avg. Progress
                    </p>
                    <p className="text-xl font-bold text-zinc-200">
                      55% Complete
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-width container for the detailed Activity Graph */}
              <div className="h-[400px] w-full">
                <ActivityTile />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
