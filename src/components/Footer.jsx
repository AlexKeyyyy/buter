import React from 'react'

export default function Footer({ onNav }){
  return (
    <footer className="mt-12 bg-[#071217] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-400">© 2025 “БуТерЪ”. Все права защищены.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button onClick={()=>onNav('contacts')} className="text-sm text-gray-400 hover:text-brand-orange">Написать нам</button>
          <a className="text-sm text-gray-400">buter@mail.ri</a>
          <a className="text-sm text-gray-400">+0 123 456 7892</a>
        </div>
      </div>
    </footer>
  )
}
