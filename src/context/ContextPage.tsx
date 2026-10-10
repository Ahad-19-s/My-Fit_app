"use client";

import { createContext, useContext, useState } from "react";
import type { Workout } from "@/types/WorksoutType";
import { toast } from "react-toastify";

interface PlanContextType {
  todayPlan: Workout[];
  savedPlan: Workout[];
  addToToday: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromToday: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedPlan, setSavedPlan] = useState<Workout[]>([]);

  const addToToday = (workout: Workout) => {
    setTodayPlan((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout],
    );
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    setSavedPlan((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout],
    );
    toast.info("Saved for later");
  };

  const removeFromToday = (id: number) => {
    setTodayPlan((prev) => prev.filter((w) => w.id !== id));
    toast.error("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSavedPlan((prev) => prev.filter((w) => w.id !== id));
    toast.error("Removed from saved");
  };

  const markDone = (id: number) => {
    setTodayPlan((prev) => prev.filter((workout) => workout.id !== id));
    toast.success("Workout marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedPlan,
        addToToday,
        addToSaved,
        removeFromToday,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
