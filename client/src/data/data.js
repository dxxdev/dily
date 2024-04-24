import {
  computer,
  computers,
  telephoneAccessory,
  telephones,
} from "../assets/icons";
import {
  asusCreatorQ531,
  asusCreatorQ532,
  asusTufGamingG161,
  asusTufGamingG162,
  asusTufGamingG163,
  asusTufGamingG164,
  asusTufGamingG165,
  asusVivoBook1,
  asusVivoBook2,
  asusVivoBook3,
  asusVivoBook4,
  asusVivoBook5,
  asusVivoBook6,
  asusVivoBook7,
  avatar,
  gamingPCZalman1,
  gamingPCZalman2,
  gamingPCZalman3,
  gamingPCZalman4,
  gamingPCZalman5,
  hpEmvyX3601,
  hpEmvyX3602,
  hpEmvyX3603,
  iPhone15Pro1,
  iPhone15Pro2,
  iPhone15Pro3,
  iPhone15Pro4,
  iPhone15Pro5,
  redmiNote12Pro1,
  redmiNote12Pro2,
  redmiNote12Pro3,
  redmiNote12Pro4,
  redmiNote12Pro5,
  redmiNote12Pro6,
  redmiNote12Pro7,
} from "../assets/images";
import filteredCategory from "../functions/filteredCategory";
import { v4 as randomId } from "uuid";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import randomNumbersArr from "../functions/randomNumbersArr";

let lastId = 1;
function generateId() {
  return lastId++;
}

export let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const products = [
  {
    id: generateId(),
    productName: "Asus VivoBook 15",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: computers,
      catalogIcon: computer,
      originalCategory: "Noutbuklar",
      brend: "Asus",
    },
    descriptions: [
      "Vivobook Go 15 OLED noutbukida har qanday kontent rang-barang ko‘rinadi, chunki u benuqson tiniq tasvirlarni ishlab chiqaradigan yuqori sifatli OLED displey bilan jihozlangan. Yupqa ramka ekrandagi narsalarga botirishni kuchaytiradi va TÜV Rheinland ergonomik sertifikati uzoq vaqt foydalanishda ko'zingiz uchun qulay ekanligini anglatadi.",
      "Qurilmangizni yangi vazifalarga tayyorlash ko'p vaqtni talab qilmaydi: tezlashtirilgan zaryadlash texnologiyasi batareyani atigi 49 daqiqada 0 dan 60% gacha to'ldiradi!",
      "Vivobook Go 15 OLED eksklyuziv SonicMaster texnologiyasiga ega boʻlib, mobil kompyuterlarda oʻrnatilgan audio sifatini taʼminlovchi apparat va dasturiy taʼminot audio yaxshilanishlari toʻplami. DTS audio texnologiyalari ham qo'llab-quvvatlanadi.",
      "Noutbuk qopqog'ini stolga qo'yganda 180° ochilishi mumkin. Bu, ayniqsa, hamkasblar yoki do'stlar bilan kontentni ko'rishda qulaydir.",
      "Bizning asosiy maqsadimiz foydalanuvchi qulayligidir, shuning uchun ErgoSense klaviaturasidagi tugmalar sayohat chuqurligi va teginish javobini mukammal tarzda sozlagan. Unga teging va har qanday ish oson va tabiiy ravishda bajarilishini his qilasiz.",
    ],
    property: [
      {
        name: "Protsessor",
        types: [
          "AMD Ryzen 5 7520U",
          "AMD Ryzen 7 6500U",
          "Intel Core i5 13500H",
          "Intel Core i7 12400H",
        ],
        prices: [200, 250, 180, 220],
        typeIndex: 3,
      },
      {
        name: "Video karta",
        types: [
          "AMD Radeon Graphics",
          "AMD RX 230 graphics",
          "Intel UHD graphics 630",
          "Intel Iris graphics",
          "Intel Iris Xe graphics",
          "Nvidia Geforce MX350",
          "Nvidia Geforce GTX1050",
        ],
        prices: [80, 120, 50, 80, 120, 150, 180],
        typeIndex: 6,
      },
      {
        name: "Operativ xotira",
        types: ["8 GB DDR5", "16 GB DDR5", "8 GB LPDDR5", "16 GB LPDDR5"],
        prices: [10, 15, 12, 18],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: [
          "256 GB M.2 NVMe Gen 3.0 SSD",
          "512 GB M.2 NVMe Gen 3.0 SSD",
          "1 TB M.2 NVMe Gen 3.0 SSD",
          "256 GB M.2 NVMe Gen 4.0 SSD",
          "512 GB M.2 NVMe Gen 4.0 SSD",
          "1 TB M.2 NVMe Gen 4.0 SSD",
        ],
        prices: [30, 50, 65, 32, 52, 70],
        typeIndex: 0,
      },
    ],
    shortly: [
      "Interfeyslar - 1x USB 2.0 Type-A 1x USB 3.2 Gen1 Type-A 1x USB 3.2 Gen1 Type-C 1x HDMI 1.4 1x 3,5 mm kombinatsiyalangan audio uyasi 1x quvvat uyasi",
      "Boshqaruv elementlari - orqadan yoritilgan membranali klaviatura, 1,4 mm tugmachaning harakatlanishi, Precision sensorli panel",
      "Simsiz interfeyslar - Wi-Fi 5 (802.11ac), 2 diapazonli 1x1 + Bluetooth 5.1",
      "Batareya - 42 Vt, 3S1P, 3 hujayra, litiy-io",
      "Displey - 15.6 FHD (1920x1080) OLED 16:9, 60Hz, yorqinligi 400 cd/m², eng yuqori yorqinligi 600 cd/m², DCI-P3: 100%, VESA5 qora displey HDR True, 1,07 milliard rang, Pantone tomonidan tasdiqlangan, 70% kamroq ko'k chiroq, TÜV Rheinland",
    ],
    images: [
      asusVivoBook1,
      asusVivoBook2,
      asusVivoBook3,
      asusVivoBook4,
      asusVivoBook5,
      asusVivoBook6,
      asusVivoBook7,
    ],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Diyorbek",
        avatar: avatar,
        date: "16.04.2024",
        rating: 5,
        comment:
          "Juda qulay va yaxshi noutbuk, va o'yinlar va ofis ishi uchun. Yomon tomoni klaviatura uchun yoritgichlar yo'q",
      },
      {
        id: randomId(),
        who: "Tohir",
        avatar: avatar,
        date: "12.04.2024",
        rating: 5,
        comment: "Ajoyib noutbuk rahmat!",
      },
      {
        id: randomId(),
        who: "Shohista",
        avatar: avatar,
        date: "09.04.2024",
        rating: 5,
        comment: "Juda ajoyib",
      },
      {
        id: randomId(),
        who: "Ilhomjon",
        avatar: avatar,
        date: "05.04.2024",
        rating: 5,
        comment: "Yaxshi zo'r",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 1,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "Asus TUF GAMING G16",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: computers,
      catalogIcon: computer,
      originalCategory: "Noutbuklar",
      brend: "Asus",
    },
    descriptions: [
      "ASUS TUF GAMING G16 kuchli oʻyin noutbuki boʻlib, oʻyin stsenariylarida yuqori unumdorlik va ishonchlilikni qadrlaydiganlar uchun moʻljallangan.",
      "TUF GAMING Design: Noutbuk TUF GAMING uslubida ishlab chiqilgan, ya'ni u bardoshli va shikastlanishga chidamli bo'lib, yuqori TUF standartlariga javob beradi.",
      "ASUS TUF GAMING G16 shunchaki noutbuk emas, balki oʻyinlarda va boshqa talabchan vazifalarda maksimal ishlashga erishish uchun moʻljallangan kuchli oʻyin mashinasidir.",
    ],
    property: [
      {
        name: "Protsessor",
        types: [
          "AMD Ryzen 5 7500HX",
          "AMD Ryzen 7 6500HX",
          "Intel Core i5 13500H",
          "Intel Core i7 12400H",
        ],
        prices: [200, 250, 180, 220],
        typeIndex: 3,
      },
      {
        name: "Video karta",
        types: [
          "AMD Radeon Graphics",
          "AMD RX 230 graphics",
          "Nvidia Geforce GTX1050",
          "Nvidia Geforce RTX2060",
          "Nvidia Geforce RTX3060",
        ],
        prices: [60, 75, 150, 240, 300],
        typeIndex: 4,
      },
      {
        name: "Operativ xotira",
        types: ["8 GB DDR5", "16 GB DDR5", "32 GB DDR5"],
        prices: [15, 20, 30],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: [
          "512 GB M.2 NVMe Gen 3.0 SSD",
          "1 TB M.2 NVMe Gen 3.0 SSD",
          "512 GB M.2 NVMe Gen 4.0 SSD",
          "1 TB M.2 NVMe Gen 4.0 SSD",
        ],
        prices: [50, 80, 60, 100],
        typeIndex: 0,
      },
    ],
    shortly: [
      "Displey: 15,6 dyuymli FHD (1920 x 1080) o‘lchamli ekran o‘yin va multimedia tajribalari uchun yorqin va aniq tasvirlarni taqdim etadi.",
      "Klaviatura va dizayn: RGB yoritgichli ASUS TUF o‘yin klaviaturasi bilan jihozlangan bo‘lib, u nafaqat zamonaviy ko‘rinishni ta’minlaydi, balki orqa yorug‘likni o‘z xohishingizga ko‘ra sozlash imkonini beradi.",
      "Sovutish: qizg'in o'yin seanslarida optimal haroratni ta'minlash uchun ASUS HyperCool texnologiyasi bilan samarali sovutish tizimiga ega.",
      "Portlar va ulagichlar: USB, HDMI, audio chiqish va boshqalarni o'z ichiga olgan turli portlarga ega bo'lib, periferik qurilmalarga qulay ulanishni ta'minlaydi.",
    ],
    images: [
      asusTufGamingG161,
      asusTufGamingG162,
      asusTufGamingG163,
      asusTufGamingG164,
      asusTufGamingG165,
    ],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Sardor",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment:
          "Noutbuk uchun katta rahmat. O'g'limga ish uchun sotib oldim, o'g'lim xursand",
      },
      {
        id: randomId(),
        who: "Sardor",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment:
          "Noutbuk uchun katta rahmat. O'g'limga ish uchun sotib oldim, o'g'lim xursand",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "Redmi Note 12 Pro",
    category: {
      id: randomId(),
      name: "Telefonlar va aksessuarlar",
      icon: telephones,
      catalogIcon: telephoneAccessory,
      originalCategory: "Telefonlar",
      brend: "Redmi",
    },
    descriptions: [
      "Yangi Xiaomi Redmi Note 12 Pro - bu haqiqatan ham ajoyib imkoniyatlarga ega smartfon. U super-kuchli flagman darajasidagi 108 MP kamerani, kuchli chipni birlashtiradi",
      "Ajoyib rang-barang 120 Gts chastotali AMOLED displey va 67 Vt ultra tez zaryadlash quvvatiga ega bo‘lib, siz har bir kuningizdan zavqlanishingiz mumkin.",
    ],
    property: [
      {
        name: "Protsessor",
        types: ["Gelio G96", "Snapdragon 732G"],
        prices: [50, 60],
        typeIndex: 1,
      },
      {
        name: "Operativ xotira",
        types: ["6 GB", "8 GB"],
        prices: [20, 30],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: ["64 GB", "128 GB", "256 GB"],
        prices: [30, 45, 60],
        typeIndex: 0,
      },
    ],
    shortly: undefined,
    images: [
      redmiNote12Pro1,
      redmiNote12Pro2,
      redmiNote12Pro3,
      redmiNote12Pro4,
      redmiNote12Pro5,
      redmiNote12Pro6,
      redmiNote12Pro7,
    ],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Bekmurod",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment: "Telefon juda zo'r bir kunda dostavka qiberishdi.",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "HP ENVY x360",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: computers,
      catalogIcon: computer,
      originalCategory: "Noutbuklar",
      brend: "HP",
    },
    descriptions: [
      "Model Full HD displey bilan jihozlangan, shuning uchun u ko'p formatli tasvirlarning ajoyib yorqinligini ta'minlaydi. O'rnatilgan Bang & Olufsen audio tizimi va ilg'or HP Audio Boost ovoz opsiyasi zerikarli shovqinsiz tiniq va chuqur ovozni ta'minlaydi.",
      "Sizda ko'p ish, ko'p o'yin-kulgi va og'ir va keng noutbuklarni doimiy yoqtirmaysizmi? Chiroyli HP Envy noutbuki aynan shunday foydalanuvchilar uchun mo'ljallangan. Yupqa metall korpus va sig'imli batareya uni kun bo'yi ochiq havoda stresssiz ishlatish imkonini beradi.",
    ],
    property: [
      {
        name: "Protsessor",
        types: [
          "AMD Ryzen 5 7500U",
          "AMD Ryzen 7 6500U",
          "Intel Core i5 13500U",
          "Intel Core i7 12400U",
        ],
        prices: [100, 150, 80, 120],
        typeIndex: 3,
      },
      {
        name: "Video karta",
        types: [
          "AMD Radeon Graphics",
          "AMD RX 230 Graphics",
          "Intel Iris Xe Graphics",
          "Intel Iris Graphics",
          "Intel UHD Graphics",
        ],
        prices: [60, 75, 50, 40, 100],
        typeIndex: 4,
      },
      {
        name: "Operativ xotira",
        types: ["8 GB DDR5", "16 GB DDR5"],
        prices: [15, 20],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: [
          "512 GB M.2 NVMe Gen 3.0 SSD",
          "1 TB M.2 NVMe Gen 3.0 SSD",
          "512 GB M.2 NVMe Gen 4.0 SSD",
          "1 TB M.2 NVMe Gen 4.0 SSD",
        ],
        prices: [50, 80, 60, 100],
        typeIndex: 0,
      },
    ],
    shortly: undefined,
    images: [hpEmvyX3601, hpEmvyX3602, hpEmvyX3603],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Damir",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment: "Menga juda yoqdi, katta rahmat",
      },
      {
        id: randomId(),
        who: "Ma'rufjon",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment: "👍",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "Asus Creator Q53",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: computers,
      catalogIcon: computer,
      originalCategory: "Noutbuklar",
      brend: "Asus",
    },
    descriptions: [
      "ASUS Creator Laptop Q yo‘l-yo‘lakay unumli bo‘lishingizni ta’minlash uchun 70 Vt/soat quvvatga ega uzoq muddatli akkumulyatorga ega bo‘lib, u sizni ijodingiz kabi davom ettiradi. Shunday qilib, batareyangizni zaryad qilish haqida qayg'urmasdan, sevimli qahvaxonangizda yoki tabiat qo'ynida dam oling!",
      "Har qanday vizual ijod ajoyib FHD OLED displeyida o‘zining o‘ta aniq, jonli ranglari bilan eng yaxshi ko‘rinadi va quloqlaringiz ko‘p o‘lchovli ovozi bilan kuchli Dolby Atmos ® tovush tizimini chinakam qadrlaydi. Ijodkor bo'ling va ASUS Creator Q noutbukini oling!",
    ],
    property: [
      {
        name: "Protsessor",
        types: [
          "AMD Ryzen 5 7500HX",
          "AMD Ryzen 7 6500HX",
          "Intel Core i5 13500H",
          "Intel Core i7 12400H",
        ],
        prices: [150, 200, 180, 220],
        typeIndex: 3,
      },
      {
        name: "Video karta",
        types: [
          "AMD Radeon Graphics",
          "AMD RX 230 Graphics",
          "Nvidia Geforce RTX3050",
          "Nvidia Geforce RTX3060",
          "Nvidia Geforce RTX4060",
        ],
        prices: [60, 75, 300, 320, 450],
        typeIndex: 4,
      },
      {
        name: "Operativ xotira",
        types: ["8 GB DDR5", "16 GB DDR5", "32 GB DDR5"],
        prices: [15, 20, 40],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: [
          "512 GB M.2 NVMe Gen 3.0 SSD",
          "1 TB M.2 NVMe Gen 3.0 SSD",
          "2 TB M.2 NVMe Gen 3.0 SSD",
          "512 GB M.2 NVMe Gen 4.0 SSD",
          "1 TB M.2 NVMe Gen 4.0 SSD",
          "2 TB M.2 NVMe Gen 4.0 SSD",
        ],
        prices: [50, 80, 140, 70, 120, 180],
        typeIndex: 0,
      },
    ],
    shortly: undefined,
    images: [asusCreatorQ531, asusCreatorQ532, asusCreatorQ531],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Sobirjon",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment:
          "Tizimdan foydalanganimga xursandman. Tizimning ishida muvaffaqiyat tilayman. Raxmat!!!",
      },
      {
        id: randomId(),
        who: "Shohjahon",
        avatar: avatar,
        rating: 5,
        date: "12.04.2024",
        comment: "👍",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "iPhone 15 Pro",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: telephones,
      catalogIcon: telephoneAccessory,
      originalCategory: "Telefonlar",
      brend: "Apple",
    },
    descriptions: [
      "Titandan ishlangan korpus.",
      "Batereyaning ishlash vaqti: 24 soatgacha.",
    ],
    property: [
      {
        name: "Protsessor",
        types: ["A17", "A17 Pro"],
        prices: [550, 600],
        typeIndex: 1,
      },
      {
        name: "Operativ xotira",
        types: ["6 GB", "8 GB"],
        prices: [250, 350],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: ["128 GB", "256 GB", "512 GB", "1 TB"],
        prices: [300, 340, 400, 470],
        typeIndex: 0,
      },
    ],
    shortly: undefined,
    images: [
      iPhone15Pro1,
      iPhone15Pro2,
      iPhone15Pro3,
      iPhone15Pro4,
      iPhone15Pro5,
    ],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Shohjahon",
        avatar: avatar,
        rating: 5,
        date: "12.04.2024",
        comment: "👍",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
  {
    id: generateId(),
    productName: "Gaming PC Zalman",
    category: {
      id: randomId(),
      name: "Elektronika",
      icon: computers,
      catalogIcon: computer,
      originalCategory: "Kompyuterlar",
      brend: "Zalman",
    },
    descriptions: [
      "Kafolat - ShK yig'ilgan kundan boshlab olti oygacha, yig'ish sanasi korpusning muhrida belgilanadi, agar muhr buzilgan bo'lsa (yirtilgan, uzilgan,, buzilgan), u holda kafolat butunlay bekor qilinadi.",
      "Kompyuter ham kuchli o'yinlar, ham grafiklar uchun mos.",
      "Barcha mahalliy DRIVERLAR, shuningdek, ofis ishlari uchun zarur bo'lgan dastlabki dasturlar (WORD - EXCEL) o'rnatildi.",
    ],
    property: [
      {
        name: "Protsessor",
        types: [
          "Intel Core i5 12400F",
          "Intel Core i5 13800F",
          "Intel Core i7 11240F",
          "Intel Core i7 12400F",
          "Intel Core i7 14500F",
          "Intel Core i9 11650F",
          "Intel Core i9 12400F",
        ],
        prices: [300, 320, 400, 430, 480, 600, 700],
        typeIndex: 1,
      },
      {
        name: "Operativ xotira",
        types: ["16 GB DDR5", "32 GB DDR5", "64 GB DDR5"],
        prices: [200, 300, 350],
        typeIndex: 0,
      },
      {
        name: "Video Karta",
        types: [
          "Nvidia Geforce RTX2060",
          "Nvidia Geforce RTX3060",
          "Nvidia Geforce RTX3070",
          "Nvidia Geforce RTX4070",
          "Nvidia Geforce RTX4090",
        ],
        prices: [300, 400, 420, 460, 490],
        typeIndex: 0,
      },
      {
        name: "Xotira",
        types: [
          "512 GB Nvme m.2 SSD Gen 4",
          "1 TB Nvme m.2 SSD Gen 4",
          "2 TB Nvme m.2 SSD Gen 4",
        ],
        prices: [100, 150, 170],
        typeIndex: 0,
      },
    ],
    shortly: undefined,
    images: [
      gamingPCZalman1,
      gamingPCZalman2,
      gamingPCZalman3,
      gamingPCZalman4,
      gamingPCZalman5,
    ],
    price: function () {
      let totalPrice = 0 + 100;
      this.property.map((item) => {
        totalPrice += item.prices[item.typeIndex];
      });
      return totalPrice;
    },
    discount: 10, // eng: the discount percentage is entered in the number  uzb: chegirma foizi raqamda kiritiladi
    discountPrice: function () {
      let lastPrices = this.price() - (this.price() / 100) * this.discount;
      return Math.floor(lastPrices);
    },
    comments: [
      {
        id: randomId(),
        who: "Sobirjon",
        avatar: avatar,
        rating: 5,
        date: "18.04.2024",
        comment:
          "Tizimdan foydalanganimga xursandman. Tizimning ishida muvaffaqiyat tilayman. Raxmat!!!",
      },
      {
        id: randomId(),
        who: "Shohjahon",
        avatar: avatar,
        rating: 5,
        date: "12.04.2024",
        comment: "👍",
      },
    ],
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 5,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
];

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
