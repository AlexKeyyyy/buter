import React from 'react'
import { motion } from 'framer-motion'

export default function Header({ page, setPage }) {
  return (
    <header className="bg-[#071014] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity:0, y:-8 }} 
          animate={{opacity:1, y:0}} 
          className="flex items-center gap-4"
        >
          {/* Лого картинкой */}
          <div className="w-13 h-13">
            <img 
              src="/images/logo.png" 
              alt="Логотип БуТеръ" 
              className="object-contain"
            />
          </div>

          {/* <div>
            <h1 className="text-lg font-serif">ФАБРИКА-КУХНЯ</h1>
            <h1 className="text-lg font-serif">"БуТерЪ"</h1>
            <div className="text-sm text-gray-400">Качество · Технологии · Забота</div>
          </div> */}
        </motion.div>

        <nav className="flex items-center gap-6">
          {['home','menu','about','contacts'].map(k=>(
            <button 
              key={k} 
              onClick={()=>setPage(k)} 
              className={`text-sm font-medium transition-colors ${page===k ? 'text-brand-orange' : 'text-gray-400 hover:text-brand-orange'}`}
            >
              {k==='home' ? 'О нас' : k==='menu' ? 'Меню' : k==='about' ? 'Преимущества' : 'Контакты'}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
