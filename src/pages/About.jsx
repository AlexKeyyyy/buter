import React from 'react'

export default function About(){
  return (
    <section>
      <h2 className="text-2xl font-serif mb-4">Преимущества</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#071217] p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Собственное производство</h4>
          <p className="text-gray-400">Работаем без посредников на собственной фабрике на современном оборудовании.</p>
        </div>
        <div className="bg-[#071217] p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Качество сырья</h4>
          <p className="text-gray-400">Только надежные поставщики и строгий отбор продуктов — контроль качества на каждом этапе.</p>
        </div>
        <div className="bg-[#071217] p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Гибкие условия</h4>
          <p className="text-gray-400">Индивидуальные условия для ресторанов, сетей, кейтеринга и оптовиков.</p>
        </div>
        <div className="bg-[#071217] p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Логистика</h4>
          <p className="text-gray-400">Оперативная логистика и удобная упаковка — доставка в кратчайшие сроки.</p>
        </div>
      </div>
    </section>
  )
}
