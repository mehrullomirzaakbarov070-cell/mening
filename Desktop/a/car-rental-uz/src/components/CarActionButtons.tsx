"use client";

import { useState } from "react";

type CarActionButtonsProps = {
  carName: string;
  price: string;
};

export default function CarActionButtons({ carName, price }: CarActionButtonsProps) {
  const [isRenting, setIsRenting] = useState(false);
  const [isContacting, setIsContacting] = useState(false);

  const handleRent = () => {
    setIsRenting(true);
    window.alert(`“${carName}” uchun ijaraga olish so‘rovi yuborildi. Narx: ${price}`);
    setTimeout(() => setIsRenting(false), 1000);
  };

  const handleContact = () => {
    setIsContacting(true);
    window.location.href = "tel:+998901234567";
    setTimeout(() => setIsContacting(false), 1000);
  };

  return (
    <div className="mt-8 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
      <button
        type="button"
        onClick={handleRent}
        disabled={isRenting || isContacting}
        className="flex-1 rounded-[28px] bg-blue-600 px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isRenting ? "Yuborilmoqda..." : "Ijaraga olish"}
      </button>

      <button
        type="button"
        onClick={handleContact}
        disabled={isRenting || isContacting}
        className="flex-1 rounded-[28px] border border-blue-600 bg-white px-5 py-4 text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isContacting ? "Qo'ng'iroq..." : "Egasi bilan bog'lanish"}
      </button>
    </div>
  );
}
