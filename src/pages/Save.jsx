import React, { useState } from 'react'
import { products } from '../data/data';
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard';
import filteredCategory from '../functions/filteredCategory';
const Save = () => {
  const filtered = products.filter(item => item.saved === true)
  const filterbyCategory = filteredCategory(filtered)
  const categoty = [
    {
      id: 0, isChaged: false, filterCat: "",
      name: "Hamma kategoriyalar"
    },
    {
      id: 1, isChaged: false, filterCat: "Smartfonlar",
      name: 'Smartfonlar'
    },
    {
      id: 2, isChaged: false, filterCat: "Telefonlar",
      name: 'Telefonlar'
    },
    {
      id: 3, isChaged: false, filterCat: "Tugmali telefonlar",
      name: "Tugmali telefonlar"
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
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(10000000)
  const celarFilter = () => {
    setMaxPrice(0)
    setMinPrice(0)
    setfilterCategor('')
  }
  return (
    <div className="bg-light-gray">
      <Breadcrumb />
      <div className='my-container flex items-start gap-20 justify-between'>
        <div className="w-1/5 p-5 rounded-xl bg-white flex flex-col gap-10">
          <ul className='flex flex-col items-start justify-between gap-5'>
            {categoty.map((e, i) => {
              return <li key={e.id}>
                <h3 onClick={() => change(i)} className={`${filterCategor.toLowerCase() === ((e.filterCat.toLowerCase())) ? "font-bold" : 'font-light'} first-letter:uppercase`}>{e.name}</h3>
              </li>
            })}
          </ul>
          <div className="flex items-center justify-between gap-2">
            <input value={minPrice} onChange={(r) => setMinPrice(r.target.value)} type="number" step={200} placeholder='min' className='w-full px-3 py-2 placeholder:text-center border-2 rounded-md' />
            <input value={maxPrice} onChange={(r) => setMaxPrice(r.target.value)} type="number" step={200} placeholder='max' className='w-full px-3 py-2 placeholder:text-center border-2 rounded-md' />
          </div>
          <button className='px-5 py-3 bg-bright-green rounded-xl text-white font-open-sans' onClick={celarFilter}>Filterni Tozalash</button>
        </div>
        <ul className='grid grid-cols-4 gap-5 w-4/5'>
          {filtered.map(element => {
            if (element.category.originalCategory.toLowerCase().includes(filterCategor.toLowerCase()) && element.price() <= maxPrice && element.price() >= minPrice) {
              return (
                <ProductCard product={element} key={element.id} />
              )
            }
          })}</ul>
      </div>
    </div>
  )
}

export default Save