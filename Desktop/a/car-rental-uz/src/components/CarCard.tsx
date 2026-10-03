"use client";

import Image from "next/image";
import Link from "next/link";

type Car = {
  id: string;
  name: string;
  year: number;
  engine: string;
  seats: number;
  pricePerDay: string;
  imageUrl: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/cars/${car.id}`}
      className="group block overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={car.imageUrl}
          alt={car.name}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
          Mashina
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
          <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            {car.year}
          </span>
        </div>

        <p className="text-sm text-slate-500">
          {car.engine} • {car.seats} orindiq
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Kunlik narx
            </p>
            <p className="text-2xl font-extrabold text-blue-600">{car.pricePerDay}</p>
          </div>

          <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Batafsil
          </span>
        </div>
      </div>
    </Link>
  );
}
