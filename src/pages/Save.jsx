import React, { useEffect, useState } from 'react'
import { products } from '../data/data';
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard';
import filteredCategory from '../functions/filteredCategory';
import CategoryProductCard from '../components/CategoryProductCard';
const Save = ({ one, setone }) => {
  const filtered = products.filter(item => item.saved === true)
  const filterbyCategory = filteredCategory(filtered)
  const categoty = [
    {
      id: 0, isChaged: false, filterCat: "",
      name: "Hamma kategoriyalar"
    },
    {
      id: 2, isChaged: false, filterCat: "Telefonlar",
      name: 'Telefonlar'
    },
    {
      id: 4, isChaged: false, filterCat: "extiyot qisimlar",
      name: "extiyot qisimlar"
    },
    {
      id: 5, isChaged: false, filterCat: "quloqchinlar",
      name: 'quloqchinlar'
    },
    {
      id: 6, isChaged: false, filterCat: "quvatlagichlar",
      name: 'quvatlagichlar'
    },
    {
      id: 7, isChaged: false, filterCat: "g'iloflar",
      name: `g'iloflar`
    },
    {
      id: 8, isChaged: false, filterCat: "himoya oynasi",
      name: "himoya oynasi"
    },
    {
      id: 9, isChaged: false, filterCat: "Noutbuklar",
      name: 'Noutbuklar'
    },
  ]
  const [filterCategor, setfilterCategor] = useState('')
  const change = (e) => {
    setfilterCategor(categoty[e].filterCat)
  }
  const [viewType, setViewType] = useState("grid");
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(100000000)
  const celarFilter = () => {
    setMaxPrice(100000000)
    setMinPrice(0)
    setfilterCategor("")
  }
  return (
    <div className="bg-light-gray">
      <Breadcrumb />
      <div className='my-container flex items-start gap-20 justify-between'>
        <div className="w-1/5 p-5 rounded-xl bg-white flex flex-col gap-10">
          <ul className='flex flex-col items-start justify-between gap-5'>

            {categoty.map((e, i) => {

              return <li key={e.id}>
                <h3 onClick={() => change(i)} className={`${filterCategor.toLowerCase() === ((e.filterCat.toLowerCase())) ? "font-bold" : 'font-light'} first-letter:uppercase cursor-pointer`}>{e.name}</h3>
              </li>

            })}

          </ul>
          <div className="flex items-center justify-between gap-2">
            <input value={minPrice} onChange={(r) => setMinPrice(r.target.value)} type="number" step={200} placeholder='min' className='w-full px-3 py-2 placeholder:text-center border-2 rounded-md' />
            <input value={maxPrice} onChange={(r) => setMaxPrice(r.target.value)} type="number" step={200} placeholder='max' className='w-full px-3 py-2 placeholder:text-center border-2 rounded-md' />
          </div>
          <button className='px-5 py-3 bg-bright-green rounded-xl text-white font-open-sans' onClick={celarFilter}>Filterni Tozalash</button>
        </div>
        <div className="w-4/5 flex flex-col items-end justify-between gap-2">
          <div className="flex justify-center items-center gap-2.5">
            <span className='font-open-sans text-sm tracking-wider first-letter:uppercase lowercase'>Ro'yhat Turini O'zgartirish</span>
            {/* change view grid */}
            <button
              onClick={() => {
                setViewType("grid");
                slicedProducts = filteredProducts.slice(0, viewed);
              }}
            >
              {viewType == "grid" ? (
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.32324 6.45959H4.32324C4.87324 6.45959 5.32324 5.97497 5.32324 5.38266V1.07497C5.32324 0.482662 4.87324 -0.00195312 4.32324 -0.00195312H1.32324C0.773242 -0.00195312 0.323242 0.482662 0.323242 1.07497V5.38266C0.323242 5.97497 0.773242 6.45959 1.32324 6.45959ZM1.32324 13.998H4.32324C4.87324 13.998 5.32324 13.5134 5.32324 12.9211V8.61343C5.32324 8.02112 4.87324 7.53651 4.32324 7.53651H1.32324C0.773242 7.53651 0.323242 8.02112 0.323242 8.61343V12.9211C0.323242 13.5134 0.773242 13.998 1.32324 13.998ZM7.32324 13.998H10.3232C10.8732 13.998 11.3232 13.5134 11.3232 12.9211V8.61343C11.3232 8.02112 10.8732 7.53651 10.3232 7.53651H7.32324C6.77324 7.53651 6.32324 8.02112 6.32324 8.61343V12.9211C6.32324 13.5134 6.77324 13.998 7.32324 13.998ZM13.3232 13.998H16.3232C16.8732 13.998 17.3232 13.5134 17.3232 12.9211V8.61343C17.3232 8.02112 16.8732 7.53651 16.3232 7.53651H13.3232C12.7732 7.53651 12.3232 8.02112 12.3232 8.61343V12.9211C12.3232 13.5134 12.7732 13.998 13.3232 13.998ZM7.32324 6.45959H10.3232C10.8732 6.45959 11.3232 5.97497 11.3232 5.38266V1.07497C11.3232 0.482662 10.8732 -0.00195312 10.3232 -0.00195312H7.32324C6.77324 -0.00195312 6.32324 0.482662 6.32324 1.07497V5.38266C6.32324 5.97497 6.77324 6.45959 7.32324 6.45959ZM12.3232 1.07497V5.38266C12.3232 5.97497 12.7732 6.45959 13.3232 6.45959H16.3232C16.8732 6.45959 17.3232 5.97497 17.3232 5.38266V1.07497C17.3232 0.482662 16.8732 -0.00195312 16.3232 -0.00195312H13.3232C12.7732 -0.00195312 12.3232 0.482662 12.3232 1.07497Z"
                    fill="#00C65E"
                  />
                </svg>
              ) : (
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5.96154H1C0.760391 5.96154 0.5 5.73632 0.5 5.38462V1.07692C0.5 0.725217 0.760391 0.5 1 0.5H4C4.23961 0.5 4.5 0.725217 4.5 1.07692V5.38462C4.5 5.73632 4.23961 5.96154 4 5.96154ZM4 13.5H1C0.760391 13.5 0.5 13.2748 0.5 12.9231V8.61539C0.5 8.26368 0.760391 8.03846 1 8.03846H4C4.23961 8.03846 4.5 8.26368 4.5 8.61539V12.9231C4.5 13.2748 4.23961 13.5 4 13.5ZM10 13.5H7C6.76039 13.5 6.5 13.2748 6.5 12.9231V8.61539C6.5 8.26368 6.76039 8.03846 7 8.03846H10C10.2396 8.03846 10.5 8.26368 10.5 8.61539V12.9231C10.5 13.2748 10.2396 13.5 10 13.5ZM16 13.5H13C12.7604 13.5 12.5 13.2748 12.5 12.9231V8.61539C12.5 8.26368 12.7604 8.03846 13 8.03846H16C16.2396 8.03846 16.5 8.26368 16.5 8.61539V12.9231C16.5 13.2748 16.2396 13.5 16 13.5ZM10 5.96154H7C6.76039 5.96154 6.5 5.73632 6.5 5.38462V1.07692C6.5 0.725217 6.76039 0.5 7 0.5H10C10.2396 0.5 10.5 0.725217 10.5 1.07692V5.38462C10.5 5.73632 10.2396 5.96154 10 5.96154ZM12.5 5.38462V1.07692C12.5 0.725217 12.7604 0.5 13 0.5H16C16.2396 0.5 16.5 0.725217 16.5 1.07692V5.38462C16.5 5.73632 16.2396 5.96154 16 5.96154H13C12.7604 5.96154 12.5 5.73632 12.5 5.38462Z"
                    fill="white"
                    stroke="#DADCDC"
                  />
                </svg>
              )}
            </button>
            {/* change view list */}
            <button
              onClick={() => {
                setViewType("list");
                slicedProducts = filteredProducts.slice(0, viewed);
              }}
            >
              {viewType == "list" ? (
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49805 9.23633H3.49805C4.04805 9.23633 4.49805 8.78633 4.49805 8.23633V6.23633C4.49805 5.68633 4.04805 5.23633 3.49805 5.23633H1.49805C0.948047 5.23633 0.498047 5.68633 0.498047 6.23633V8.23633C0.498047 8.78633 0.948047 9.23633 1.49805 9.23633ZM1.49805 14.2363H3.49805C4.04805 14.2363 4.49805 13.7863 4.49805 13.2363V11.2363C4.49805 10.6863 4.04805 10.2363 3.49805 10.2363H1.49805C0.948047 10.2363 0.498047 10.6863 0.498047 11.2363V13.2363C0.498047 13.7863 0.948047 14.2363 1.49805 14.2363ZM1.49805 4.23633H3.49805C4.04805 4.23633 4.49805 3.78633 4.49805 3.23633V1.23633C4.49805 0.686328 4.04805 0.236328 3.49805 0.236328H1.49805C0.948047 0.236328 0.498047 0.686328 0.498047 1.23633V3.23633C0.498047 3.78633 0.948047 4.23633 1.49805 4.23633ZM6.49805 9.23633H16.498C17.048 9.23633 17.498 8.78633 17.498 8.23633V6.23633C17.498 5.68633 17.048 5.23633 16.498 5.23633H6.49805C5.94805 5.23633 5.49805 5.68633 5.49805 6.23633V8.23633C5.49805 8.78633 5.94805 9.23633 6.49805 9.23633ZM6.49805 14.2363H16.498C17.048 14.2363 17.498 13.7863 17.498 13.2363V11.2363C17.498 10.6863 17.048 10.2363 16.498 10.2363H6.49805C5.94805 10.2363 5.49805 10.6863 5.49805 11.2363V13.2363C5.49805 13.7863 5.94805 14.2363 6.49805 14.2363ZM5.49805 1.23633V3.23633C5.49805 3.78633 5.94805 4.23633 6.49805 4.23633H16.498C17.048 4.23633 17.498 3.78633 17.498 3.23633V1.23633C17.498 0.686328 17.048 0.236328 16.498 0.236328H6.49805C5.94805 0.236328 5.49805 0.686328 5.49805 1.23633Z"
                    fill="#00C65E"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.32324 8.49805H1.32324C1.04938 8.49805 0.823242 8.2719 0.823242 7.99805V5.99805C0.823242 5.72419 1.04938 5.49805 1.32324 5.49805H3.32324C3.5971 5.49805 3.82324 5.72419 3.82324 5.99805V7.99805C3.82324 8.2719 3.5971 8.49805 3.32324 8.49805ZM3.32324 13.498H1.32324C1.04938 13.498 0.823242 13.2719 0.823242 12.998V10.998C0.823242 10.7242 1.04938 10.498 1.32324 10.498H3.32324C3.5971 10.498 3.82324 10.7242 3.82324 10.998V12.998C3.82324 13.2719 3.5971 13.498 3.32324 13.498ZM3.32324 3.49805H1.32324C1.04938 3.49805 0.823242 3.2719 0.823242 2.99805V0.998047C0.823242 0.724189 1.04938 0.498047 1.32324 0.498047H3.32324C3.5971 0.498047 3.82324 0.724189 3.82324 0.998047V2.99805C3.82324 3.2719 3.5971 3.49805 3.32324 3.49805ZM16.3232 8.49805H6.32324C6.04938 8.49805 5.82324 8.2719 5.82324 7.99805V5.99805C5.82324 5.72419 6.04938 5.49805 6.32324 5.49805H16.3232C16.5971 5.49805 16.8232 5.72419 16.8232 5.99805V7.99805C16.8232 8.2719 16.5971 8.49805 16.3232 8.49805ZM16.3232 13.498H6.32324C6.04938 13.498 5.82324 13.2719 5.82324 12.998V10.998C5.82324 10.7242 6.04938 10.498 6.32324 10.498H16.3232C16.5971 10.498 16.8232 10.7242 16.8232 10.998V12.998C16.8232 13.2719 16.5971 13.498 16.3232 13.498ZM5.82324 2.99805V0.998047C5.82324 0.724189 6.04938 0.498047 6.32324 0.498047H16.3232C16.5971 0.498047 16.8232 0.724189 16.8232 0.998047V2.99805C16.8232 3.2719 16.5971 3.49805 16.3232 3.49805H6.32324C6.04938 3.49805 5.82324 3.2719 5.82324 2.99805Z"
                    fill="white"
                    stroke="#DADCDC"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul className={`grid ${viewType === 'grid' ? "grid-cols-1" : "grid-cols-4"} gap-5 w-full`}>
            {filtered.map(element => {
              if (element.category.originalCategory.toLowerCase().includes(filterCategor.toLowerCase()) && element.price() <= maxPrice && element.price() >= minPrice) {
                if (viewType === "grid") {
                  return (
                    <CategoryProductCard one={one} setone={setone} product={element} key={element.id} />
                  )
                } else {
                  return (
                    <ProductCard one={one} setone={setone} product={element} key={element.id} />
                  )
                }
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Save