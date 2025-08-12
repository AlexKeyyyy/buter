import React from "react";
import { motion } from "framer-motion";

export default function Header({ page, setPage }) {
  return (
    <header className="bg-[#071014] border-b border-gray-800">
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
          className="text-center"
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

        {/* НАВБАР СПРАВА */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6"
        >
          {["home", "menu", "about", "contacts"].map((k) => (
            <button
              key={k}
              onClick={() => setPage(k)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                page === k
                  ? "text-brand-orange"
                  : "text-gray-400 hover:text-brand-orange"
              }`}
            >
              {k === "home"
                ? "О нас"
                : k === "menu"
                ? "Меню"
                : k === "about"
                ? "Преимущества"
                : "Контакты"}
            </button>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
