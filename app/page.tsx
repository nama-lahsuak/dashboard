import { createClient } from "@/lib/supabase/server";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { Course } from "@/types";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase fetch error:", error.message);
    return (
      <div className="flex h-screen items-center justify-center bg-black text-red-500">
        <p>
          Unable to load dashboard data. Please check your database connection.
        </p>
      </div>
    );
  }

  return <DashboardShell courses={courses as Course[]} />;
}
