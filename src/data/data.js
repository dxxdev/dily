import { computer, computers } from "../assets/icons";
import {
  asusVivoBook1,
  asusVivoBook2,
  asusVivoBook3,
  asusVivoBook4,
  asusVivoBook5,
  asusVivoBook6,
  asusVivoBook7,
  avatar,
} from "../assets/images";
import filteredCategory from "../functions/filteredCategory";
import { v4 as randomId } from "uuid";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";

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
    avatar: avatar,
    address: "Toshkent",
    rating: 5,
    reservation: 1,
    countProduct: 1,
    inTheCart: false,
    saved: false,
  },
];

console.log(filteredCategoryMenuItems(filteredCategory(products)));
console.log(filteredCategory(products));
