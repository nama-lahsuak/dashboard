"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, LineChart } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "activity", label: "Activity", icon: LineChart },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="fixed bottom-0 z-50 flex w-full flex-shrink-0 flex-col border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md md:relative md:h-screen md:w-20 md:border-r md:border-t-0 lg:w-64">
      <div className="hidden h-20 items-center justify-center md:flex lg:justify-start lg:px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          N
        </div>
        <span className="ml-3 hidden text-xl font-bold tracking-tight text-zinc-100 lg:block">
          NextGen
        </span>
      </div>

      <nav className="flex w-full gap-1 overflow-x-auto px-2 py-3 md:mt-6 md:flex-col md:px-3 md:py-0">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-1 items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-medium outline-none transition-colors hover:text-zinc-100 md:flex-none lg:justify-start"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-tab"
                  className="absolute inset-0 rounded-xl bg-neutral-900"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`relative z-10 ${isActive ? "text-white" : "text-zinc-500"}`}
              >
                <item.icon className="h-5 w-5" />
              </span>
              <span
                className={`relative z-10 hidden lg:block ${isActive ? "text-zinc-100" : "text-zinc-500"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
