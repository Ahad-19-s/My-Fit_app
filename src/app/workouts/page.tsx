import { fetchWorkouts } from "@/lib/FatchWorkouts";
import LibrarySection from "@/components/library/LibrarySection";

export default async function WorkoutsPage() {
  // API থেকে workouts আনবে
  const workouts = await fetchWorkouts();

  return (
    <main className="bg-[#101010] text-white">
      {/* workouts props হিসেবে পাঠাও */}
      <LibrarySection workouts={workouts} />
    </main>
  );
}
