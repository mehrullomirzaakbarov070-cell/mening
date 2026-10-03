"use client";

import AuthModal from "@/components/AuthModal";
import { useState } from "react";

export default function HomeActions() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const scrollToCars = () => {
    const carsSection = document.getElementById("cars-section");
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="mt-6 flex w-full max-w-lg flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={scrollToCars}
          className="flex-1 rounded-[28px] bg-white px-5 py-4 text-center text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
        >
          Mashinalarni ko'rish
        </button>
        <button
          type="button"
          onClick={() => setIsAuthOpen(true)}
          className="flex-1 rounded-[28px] border border-white/70 bg-transparent px-5 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          Bepul maslahat
        </button>
      </div>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        defaultTab="register"
      />
    </>
  );
}
