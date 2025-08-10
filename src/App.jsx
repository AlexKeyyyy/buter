import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { PRODUCTS } from './data/products'
import ProductModal from './components/ProductModal'

export default function App(){
  const [page, setPage] = useState('home')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = useMemo(()=>['Все', ...Array.from(new Set(PRODUCTS.map(p=>p.category)))],[])

  const filtered = useMemo(()=> {
    return PRODUCTS.filter(p=>{
      if(category !== 'Все' && p.category !== category) return false
      if(query && !(`${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase()))) return false
      return true
    })
  },[query, category])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <Header page={page} setPage={setPage} />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {page==='home' && <Home onShowMenu={()=>setPage('menu')} />}
        {page==='menu' && <Menu
          products={filtered}
          categories={categories}
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          onOpenProduct={setSelectedProduct}
        />}
        {page==='about' && <About/>}
        {page==='contacts' && <Contacts/>}
      </main>
      <Footer onNav={setPage}/>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)} />}
    </div>
  )
}
