import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Menu({ products, categories, query, setQuery, category, setCategory, onOpenProduct }) {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-serif">Меню</h2>
        <div className="flex gap-3 items-center">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск по блюдам" className="px-3 py-2 rounded-md bg-[#071217] border border-gray-700 text-gray-200" />
          <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded-md bg-[#071217] border border-gray-700 text-gray-200">
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p} onOpen={()=>onOpenProduct(p)} />)}
      </div>

      {products.length===0 && <div className="text-center text-gray-500 mt-12">Ничего не найдено по запросу.</div>}
    </section>
  )
}
