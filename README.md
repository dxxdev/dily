<div align="center">
  <img src="./client/src/assets/logo/logo.svg" alt="Dily.uz Logo" width="200" />
  <h1>Dily.uz - Elektronika Internet Do'koni</h1>
  <p>
    Elektronik qurilmalar sotiladigan O'zbekistondagi zamonaviy, tezkor va premium dizayndagi birinchi raqamli internet do'kon loyihasi.
  </p>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
</div>

<br />

## 🌟 Loyiha Haqida

[Dily.uz](https://dily.uz) - bu foydalanuvchilar kompyuterlar, telefonlar, planshetlar kabi turli texnikalarni osongina topishi va xarid qilishi mumkin bo'lgan elektron tijorat (E-commerce) platformasi. Loyiha o'zida mijozlar uchun qulay interfeys (do'kon) va boshqaruvchilar uchun qulay **Admin Panel** qismini jamlagan. 

### 🚀 Asosiy Imkoniyatlar (Features)
- **Zamonaviy Interfeys**: TailwindCSS va zamonaviy UI yechimlari orqali ajoyib foydalanuvchi tajribasi.
- **Katalog va Qidiruv**: Mahsulotlarni toifalari bo'yicha saralash, qidirish va filtrlash imkoniyatlari.
- **Admin Dashboard**: Mahsulotlar, buyurtmalar va foydalanuvchilarni qulay boshqarish uchun mo'ljallangan himoyalangan admin panel.
- **Responsive Dizayn**: Kompyuter, planshet va mobil telefonlarda birdek chiroyli ishlash.
- **Real-Time Data**: Front-end ma'lumotlari hozirda static ma'lumotlar orqali chaqirilsa-da, to'laqonli MongoDB ga asoslangan backend tizimiga ulanish uchun tayyor.

---

## 🛠 Texnologiyalar (Tech Stack)

**Client-side (Front-end):**
- [React](https://reactjs.org/) (Vite orqali)
- [TailwindCSS](https://tailwindcss.com/) (Stillashtirish)
- [React Router v6](https://reactrouter.com/) (Marshrutlash/Routing)
- [Lucide React](https://lucide.dev/) (Ikonkalar)
- Redux (Holatni boshqarish)

**Server-side (Back-end):**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) (Server)
- [MongoDB](https://www.mongodb.com/) & Mongoose (Ma'lumotlar bazasi)
- Pug (View Engine)
- Cors

---

## ⚙️ Loyihani Lokal Ishga Tushirish (How to run locally)

Loyihani o'z kompyuteringizda ishga tushirish uchun kompyuteringizda **Node.js** o'rnatilgan bo'lishi kerak.

### 1. Loyihani yuklab oling
```bash
git clone https://github.com/dxxdev/dily.git
cd dily
```

### 2. Front-end qismini ishga tushirish
```bash
cd client
npm install
npm run dev
```
Shundan so'ng mijozlar qismini `http://localhost:5173`, admin panelni esa `http://localhost:5173/admin` manzilidan ko'rishingiz mumkin.

### 3. Back-end qismini ishga tushirish (agar kerak bo'lsa)
Yangi terminal oching va quyidagilarni kiriting:
```bash
cd server
npm install
npm start
```
Server `localhost:5588` portida ishga tushadi. (*Eslatma: MongoDB kompyuteringizda o'rnatilgan va ishlab turgan bo'lishi kerak*).

---

## 👥 Loyiha Hissadorlari (Contributors)

Loyihani yaratish va rivojlantirishga o'z hissasini qo'shgan dasturchilar:

1. [@dxxdev](https://www.github.com/dxxdev)
2. [@silvante](https://www.github.com/silvante)
3. [@Boburov-Shukurillo](https://www.github.com/Boburov-Shukurillo)
4. [@Javohir0080703](https://www.github.com/Javohir0080703)

---
> **Eslatma:** Dily.uz loyihasi ustida doimiy ravishda takomillashtirish ishlari olib borilmoqda. Fikr va mulohazalaringiz bo'lsa, issue ochishingiz yoki hissa qo'shishingiz mumkin!
