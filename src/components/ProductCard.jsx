import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onOpen }) {
  return (
    <motion.article
      className="bg-[#0f1720] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
      whileHover={{ scale: 1.02 }}
    >
      <div className="h-44 bg-[#0b1114] flex items-center justify-center">
        <img src={product.image} alt={product.name} className="max-h-40 object-contain" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-white">{product.name}</h3>
          <div className={`text-sm font-medium ${product.available ? 'text-green-400' : 'text-red-500'}`}>
            {product.available ? 'В наличии' : 'Нет'}
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-brand-gold">{product.price} ₽</div>
            <div className="text-xs text-gray-500">{product.weight} · {product.calories} ккал</div>
          </div>
          <div className="flex gap-2">
            <button onClick={onOpen} className="px-3 py-2 rounded-md border border-gray-600 text-sm text-white hover:bg-gray-700">Подробнее</button>
            <button disabled={!product.available} className={`px-3 py-2 rounded-md text-sm ${product.available ? 'bg-brand-orange text-white' : 'bg-gray-600 text-gray-400'}`}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
