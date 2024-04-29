import { products } from "../data/data";
const isSaved = products.filter((r) => {
  r.saved === true;
});

function bildrishnoma() {
  return isSaved.length;
}

export default bildrishnoma;
