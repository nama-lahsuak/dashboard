# Next-Gen Learning Dashboard

A high-fidelity, dark-mode student dashboard prototype built with Next.js (App Router), Supabase, Tailwind CSS, and Framer Motion.

---

## 📐 Architecture & Component Split

- **Server Components (RSC)**: Handles secure, direct data fetching from the Supabase PostgreSQL database to render content efficiently on the server.
- **Client Components**: Isolated strictly to interactive layouts (Sidebar tabs, BentoGrid entry effects, and CourseCard spotlights) to power hardware-accelerated animations.
- **Loading States**: Uses a native `loading.tsx` skeleton layout to display structural pulsing animations during data retrieval, achieving zero layout shift.

---

## ⚡ Engineering Challenges Solved

- **Supabase API & RLS Access**: Resolved permission blocks caused by strict Row Level Security (RLS) and missing database schema privileges for the public `anon` role by executing explicit `GRANT SELECT` permissions.
- **Next.js Aggressive Data Caching**: Fixed stale permission error screens lingering in the browser by implementing `export const dynamic = 'force-dynamic'`, preventing the App Router from caching database errors during configuration changes.
- **Hydration Mismatch**: Solved server/client rendering conflicts in the Activity Tile by replacing random data generation (`Math.random()`) with a deterministic static seed pattern.
- **Grid Overflow**: Fixed vertical clipping inside the Bento rows by refactoring the activity block matrix into a fixed column-flow grid layout, completely separating item height from fluid browser stretching.

---

## 🚀 Setup & Installation

1. **Install Dependencies**

```bash
   npm install
```

2. **Configure Environment Variables**
   Create a .env.local file using the keys specified in .env.example:

```Code snippet
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_public_anon_key
```

3.  **Launch Development Environment**

```bash
   npm run dev
```
