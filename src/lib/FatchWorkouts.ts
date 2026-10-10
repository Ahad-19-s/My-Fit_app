"use server"; // Next.js hint for server-side function
import type { Workout } from "@/types/WorksoutType";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/workouts";

export async function fetchWorkouts(): Promise<Workout[]> {
  "use cache"; // Next.js hint → prerender safe

  try {
    const response = await fetch(API_URL, {
  cache: "force-cache",
  next: { revalidate: 300 }, // প্রতি 5 মিনিটে refresh হবে
});


    if (!response.ok) {
      console.error("API not OK:", response.status);
      return [];
    }

    const result = await response.json();
    const workouts = Array.isArray(result)
      ? result
      : result.data ?? result.workouts ?? result.results;

    if (!Array.isArray(workouts)) {
      console.error("Invalid workout API response:", result);
      return [];
    }

    return workouts as Workout[];
  } catch (error) {
    console.error("Workout fetch error:", error);
    return [];
  }
}
