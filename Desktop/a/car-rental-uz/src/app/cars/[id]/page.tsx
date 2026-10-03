import CarActionButtons from "@/components/CarActionButtons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Car = {
  id: string;
  name: string;
  year: number;
  engine: string;
  seats: number;
  pricePerDay: string;
  imageUrl: string;
  description: string;
};

async function getCarById(id: string): Promise<Car | null> {
  const response = await fetch("http://localhost:3000/api/cars", {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const cars = (await response.json()) as Car[];
  return cars.find((car) => String(car.id) === id) ?? null;
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
        >
          ← Asosiy sahifaga qaytish
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-blue-100">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-3 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {car.year} yilda ishlab chiqarilgan
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                {car.name}
              </h1>

              <p className="mt-4 text-3xl font-extrabold text-blue-600">
                {car.pricePerDay}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">Yili</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{car.year}</p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">Dvigatel</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{car.engine}</p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">O'rindiqlar soni</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{car.seats}</p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">Narxi</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{car.pricePerDay}</p>
                </div>
              </div>

              <CarActionButtons carName={car.name} price={car.pricePerDay} />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
          <h2 className="text-2xl font-bold text-slate-900">Tavsifi</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{car.description}</p>
        </div>
      </div>
    </main>
  );
}
