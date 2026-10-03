import CarCard from "@/components/CarCard";
import HomeActions from "@/components/HomeActions";

async function getCars() {
  const response = await fetch("http://localhost:3000/api/cars", {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function HomePage() {
  const cars = await getCars();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-8 text-white shadow-xl md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-blue-50">
                O'zbekiston bo'ylab ijaraga olish
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                Arendaga mashinalar
              </h1>
              <p className="mt-4 text-lg text-blue-50">
                Qulay, xavfsiz va tezkor kirish. Toshkentdan Samarqandgacha,
                barcha mashinalar siz uchun tayyor.
              </p>

              <HomeActions />
            </div>

            <div className="grid w-full max-w-md gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Mashinalar</p>
                <p className="mt-2 text-3xl font-bold text-white">{cars.length}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Xizmat</p>
                <p className="mt-2 text-3xl font-bold text-white">24/7</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Mijozlar</p>
                <p className="mt-2 text-3xl font-bold text-white">1.5K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cars-section" className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Mashinalar
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Mashhurlari
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cars.map((car: any) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
}
