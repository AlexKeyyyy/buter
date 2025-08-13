import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // иконки меню

export default function Header({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "home", label: "О нас" },
    { key: "menu", label: "Меню" },
    { key: "about", label: "Преимущества" },
    { key: "contacts", label: "Контакты" },
  ];

  return (
    <header className="bg-[var(--bg)] border-b border-[var(--panel)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ЛОГО СЛЕВА */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo2.png`}
            alt="Логотип БуТерЪ"
            className="h-14 w-auto object-contain"
          />
        </motion.div>

        {/* ЭМБЛЕМА ПО ЦЕНТРУ */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block text-center"
        >
          <h1 className="text-xl font-serif text-white tracking-wide">
            ФАБРИКА-КУХНЯ
          </h1>
          <h2 className="text-xl font-serif text-brand-orange">
            "БуТеръ"
          </h2>
          <div className="text-sm text-gray-400">
            Качество · Технологии · Забота
          </div>
        </motion.div>

        {/* НАВБАР — десктоп */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                page === item.key
                  ? "text-brand-orange"
                  : "text-gray-400 hover:text-brand-orange"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.nav>

        {/* КНОПКА МЕНЮ — мобилки */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FiX className="text-white text-2xl" />
            ) : (
              <FiMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* ВЫПАДАЮЩЕЕ МЕНЮ — мобилки */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#071014] border-t border-gray-800"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setPage(item.key);
                  setMobileOpen(false);
                }}
                className={`text-sm font-medium uppercase tracking-wide text-left ${
                  page === item.key
                    ? "text-brand-orange"
                    : "text-gray-400 hover:text-brand-orange"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
