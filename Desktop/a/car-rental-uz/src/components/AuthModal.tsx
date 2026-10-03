"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
};

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = "login",
}: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">(defaultTab);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTab(defaultTab);
    }
  }, [defaultTab, isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);

    if (tab === "login") {
      window.alert("Tizimga muvaffaqiyatli kirdingiz!");
    } else {
      window.alert("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600/80 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl rounded-[30px] bg-white p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-600">Car Rental Uz</p>
                <h2 className="mt-1 text-4xl font-black tracking-tight text-slate-900">
                  Hisobga kirish
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-3xl leading-none text-blue-600 transition-colors hover:bg-blue-100"
                aria-label="Yopish"
              >
                ×
              </button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 rounded-[22px] bg-blue-50 p-2">
              <button
                type="button"
                onClick={() => setTab("login")}
                className={`rounded-[18px] px-4 py-4 text-xl font-semibold transition-colors ${
                  tab === "login"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-blue-600"
                }`}
              >
                Tizimga kirish
              </button>
              <button
                type="button"
                onClick={() => setTab("register")}
                className={`rounded-[18px] px-4 py-4 text-xl font-semibold transition-colors ${
                  tab === "register"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-blue-600"
                }`}
              >
                Ro'yxatdan o'tish
              </button>
            </div>

            {tab === "login" ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-xl font-medium text-slate-700">
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    placeholder="Mehrullo"
                    className="w-full rounded-[18px] border border-blue-300 bg-white px-4 py-4 text-xl text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl font-medium text-slate-700">
                    Parol
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••••••"
                    className="w-full rounded-[18px] border border-blue-300 bg-white px-4 py-4 text-xl text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-[18px] bg-blue-600 px-4 py-4 text-2xl font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {isLoading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    "Kirish"
                  )}
                </button>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-xl font-medium text-slate-700">
                    Ism
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className="w-full rounded-[18px] border border-blue-300 bg-white px-4 py-4 text-xl text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl font-medium text-slate-700">
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full rounded-[18px] border border-blue-300 bg-white px-4 py-4 text-xl text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl font-medium text-slate-700">
                    Parol
                  </label>
                  <input
                    type="password"
                    placeholder="Yangi parol"
                    className="w-full rounded-[18px] border border-blue-300 bg-white px-4 py-4 text-xl text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-[18px] bg-blue-600 px-4 py-4 text-2xl font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {isLoading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    "Ro'yxatdan o'tish"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
