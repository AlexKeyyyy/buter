import React from 'react'
import { motion } from 'framer-motion'

export default function Home({ onShowMenu }) {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center text-white">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-4xl font-serif mb-4">Мы создаём настроение — вкусно и полезно</h2>
        <p className="text-gray-400 mb-6"> Мы – современное предприятие, где традиции качественного 
питания сочетаются с инновационными технологиями производства. 
Наша миссия – дарить людям радость вкусной еды, сохраняя при 
этом все полезные свойства продуктов.</p>
<p className="text-gray-400 mb-6">Мы создаем не просто еду – мы создаем настроение! 
Каждое блюдо готовится с любовью и заботой о вашем здоровье.
 Доверьте нам заботу о вашем питании – выбирайте качество 
и вкус, выбирайте "БуТеръ"!</p>
        <div className="flex gap-4">
          <button onClick={onShowMenu} className="px-5 py-3 rounded-md bg-brand-orange text-white font-semibold shadow">Посмотреть меню</button>
          <a href="#contacts" className="px-5 py-3 rounded-md border border-gray-600 text-gray-300">Связаться</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        {/* <div className="w-full h-72 bg-[#071217] rounded-lg flex items-center justify-center">Фото продукции / слайдер</div> */}
        <div className="w-15 h-15">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.jpg`} 
              alt="Логотип БуТеръ" 
              className="w-full h-full object-contain"
            />
          </div>
      </motion.div>
    </section>
  )
}
