import { v4 as randomId } from "uuid";
import { telephoneAccessory, telephones } from "../assets/icons";
import {
  appleAirPodsPro1,
  appleAirPodsPro2,
  appleAirPodsPro3,
  appleAirPodsPro4,
  appleAirPodsPro5,
  avatar,
} from "../assets/images";

const accesories = [
  {
    id: randomId(),
    ProductName: "Apple Air Pods Pro",
    category: {
      id: randomId(),
      name: "Telefon va aksessuarlar",
      icon: telephones,
      catalogIcon: telephoneAccessory,
      originalCategory: "Quloqchinlar",
      brend: "Apple",
    },
    description: ["Simsiz quloqchinlar"],
    property: undefined,
    shortly: undefined,
    images: [
      appleAirPodsPro1,
      appleAirPodsPro2,
      appleAirPodsPro3,
      appleAirPodsPro4,
      appleAirPodsPro5,
    ],
    price: function () {
      return 35;
    },
    discount: 10, // TODO eng: the discount percentage is entered in the number uzb: chegirma foizi raqamda kiritiladi
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
        comment: "Zo'r",
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

export { accesories };
