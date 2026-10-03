import { NextResponse } from "next/server";

const cars = [
  {
    id: "chevrolet-malibu-2",
    name: "Chevrolet Malibu 2",
    year: 2018,
    engine: "2.0L benzin",
    seats: 5,
    pricePerDay: "400 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Malibu 2 - Toshkent shahrida mashhur bo'lgan qulay va ishonchli sedan. Katta salon, yumshoq orindiqlar va yuqori darajadagi qulaylik imkoniyatlari bilan ajralib turadi. Shaharlarda harakatlanish, oilaviy sayohat va ishga borish uchun ideal variant. Avtomobilning dinamik dvigateli va past yoqilg'i sarfi uni hamma uchun qulay tanlovga aylantiradi.",
  },
  {
    id: "chevrolet-tracker",
    name: "Chevrolet Tracker",
    year: 2021,
    engine: "1.5L benzin",
    seats: 5,
    pricePerDay: "520 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Tracker - zamonaviy, kuchli va xushbichim SUV, u shahar ichida va qishloq yo'llarida ham qulay ishlaydi. Yuqori ko'tarilish, keng salon va xavfsizlik tizimlari bilan jihozlangan. Oila bilan sayohat qilish, turli manzilga borish yoki uzoq safarlar uchun eng mos transport vositasidir. Katta bagaj va qadamli boshqaruv systemasi bu mashinani qulay qiladi.",
  },
  {
    id: "chevrolet-cobalt",
    name: "Chevrolet Cobalt",
    year: 2019,
    engine: "1.5L benzin",
    seats: 5,
    pricePerDay: "360 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Cobalt - iqtisodiy, qulay va ishonchli hatchback. Kichik xarajatlar va yaxshi harakatchanlik bilan ajralib turadi. Shahar ichida tezlikni saqlash, yo'lovchilarni tashish va kundalik ishlarda foydalanish uchun optimal variant. Salon ichki maydoni yaxshi mo'ljallangan bo'lib, ham kundalik, ham qisqa safarlar uchun qulaydir.",
  },
  {
    id: "chevrolet-gentra",
    name: "Chevrolet Gentra",
    year: 2020,
    engine: "1.6L benzin",
    seats: 5,
    pricePerDay: "420 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Gentra - O'zbekistonda keng tarqalgan va talabga mos sedan klassidagi mashina. Yengil boshqaruv, qulay yo'lovchi xonasi va arzon ekspluatatsiyasi bilan taniladi. Ishga borish, universitetga ketish yoki oilaviy sayohat uchun mukammal tanlov. O'zining barqaror ishlashi, takomillashtirilgan salon va xavfsiz haydovchi holati bilan mijozlarga qulaylik taqdim etadi.",
  },
  {
    id: "daewoo-nexia",
    name: "Daewoo Nexia",
    year: 2017,
    engine: "1.5L benzin",
    seats: 5,
    pricePerDay: "330 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Daewoo Nexia - O'zbekistonda tanish va ommabop sedan bo'lib, arzon ijaraga olish va past xarajatlar uchun yaxshi tanlovdir. Mashina yaxshi boshqaruv va ishonchli ishlashi bilan ajralib turadi. Kichik oilalar, shaharlarda ishlovchilar va doimiy sayohatlar uchun juda qulaydir. Yengil dvigatel va keng salon bilan foydalanuvchilar uchun mos variant hisoblanadi.",
  },
  {
    id: "chevrolet-spark",
    name: "Chevrolet Spark",
    year: 2022,
    engine: "1.2L benzin",
    seats: 5,
    pricePerDay: "290 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Spark - kichik hajmli, yengil va shahar ichida mos keladigan avtomobil. Qulay foydalanish, kichik yoqilg'i sarfi va yaxshi manevr qobiliyati tufayli Toshkent va boshqa shaharlar uchun ideal tanlovdir. Kichik oila yoki yakka sayohatlar uchun qulay. Harakatlanish oson va to'xtash joylari uchun juda mos keladi.",
  },
  {
    id: "ravon-r4",
    name: "Ravon R4",
    year: 2021,
    engine: "1.3L benzin",
    seats: 5,
    pricePerDay: "380 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ravon R4 - zamonaviy design, qulay salon va samarali ishga tushirish tizimiga ega bo'lgan mashina. O'zbekiston bozorida tez tan olinadigan avtomobillar qatoriga kiradi. Keng yo'llar va shahar ichida yaxshi ishlaydi. Tashqi ko'rinishi ham, ichki qulayligi ham ijaraga olish uchun yaxshi ko'rsatkichga ega.",
  },
  {
    id: "hyundai-accent",
    name: "Hyundai Accent",
    year: 2019,
    engine: "1.4L benzin",
    seats: 5,
    pricePerDay: "410 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hyundai Accent - qulay va ishonchli sedan bo'lib, shahar bo'ylab yurish uchun maksimal imkoniyat yaratadi. Yengil va juda qulay boshqaruv mavjud. Salonning kengligi va bagaj hajmi sayohatlarda muhim omil hisoblanadi. Ishga ketish, biznes safarlari va oilaviy chiqishlar uchun yaxshi tanlovdir.",
  },
  {
    id: "kia-rio",
    name: "Kia Rio",
    year: 2020,
    engine: "1.6L benzin",
    seats: 5,
    pricePerDay: "470 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kia Rio - zamonaviy uslub, qulay salon va kuchli dvigatel bilan ajralib turadi. O'zbekiston bozorida ijaraga beriladigan mashinalar orasida ham ishonchli variantlardan biri. Keng yo'laklarda yaxshi xavfsizlik va yaxshi ko'tarilish ta'minotiga ega. Katta sayohatlar yoki biznes safarlari uchun yuqori darajadagi komfort taqdim etadi.",
  },
  {
    id: "chevrolet-lacetti",
    name: "Chevrolet Lacetti",
    year: 2018,
    engine: "1.6L benzin",
    seats: 5,
    pricePerDay: "350 000 so'm",
    imageUrl:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chevrolet Lacetti - ishonchli, arzon va qulay sedan bo'lib, uzoq muddatda foydalanishga mos keladi. Katta salon va yaxshi ko'zga chalinadigan ichki bezaklari bilan taniladi. Shaharlarda ishlovchilar, talabalar va oilalar uchun ideal tanlovdir. Past yoqilg'i sarfi va barqaror ishlash uni arzon ijaraga olishni xohlaydiganlar uchun yaxshi variant qiladi.",
  },
];

export async function GET() {
  return NextResponse.json(cars);
}
