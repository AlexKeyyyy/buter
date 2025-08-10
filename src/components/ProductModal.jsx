import React from 'react'
import { motion } from 'framer-motion'

export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <motion.div initial={{ opacity:0, scale:0.95 }} animate={{opacity:1, scale:1}} className="relative bg-[#0b0f12] rounded-2xl shadow-xl max-w-3xl w-full overflow-auto">
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center bg-[#061018] rounded-lg">
            <img src={product.image} alt={product.name} className="max-h-80 object-contain" />
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-1">{product.name}</h3>
            <div className="text-sm text-gray-400">{product.category} · {product.weight} · {product.calories} ккал</div>
            <p className="mt-4 text-gray-300">{product.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-3xl font-extrabold text-brand-gold">{product.price} ₽</div>
              <button disabled={!product.available} className={`px-4 py-2 rounded-md text-white ${product.available ? 'bg-brand-orange' : 'bg-gray-600'}`}>Добавить в корзину</button>
              <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-700">Закрыть</button>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <strong>Примечание:</strong> можно добавить ингредиенты, аллергенную информацию и номер позиции для заказа оптом.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
