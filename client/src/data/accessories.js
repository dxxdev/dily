import { v4 } from "uuid";
import { telephoneAccessory, telephones } from "../assets/icons";
import { avatar } from "../assets/images";

const accesories = [
  {
    id: v4(),
    ProductName: "Apple Air Pods Pro",
    category: {
      id: v4(),
      name: "Telefon va aksessuarlar",
      icon: telephones,
      catalogIcon: telephoneAccessory,
      originalCategory: "Quloqchinlar",
      brend: "Apple",
    },
    description: ["Simsiz quloqchinlar"],
    property: undefined,
    shortly: undefined,
    images: [],
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
