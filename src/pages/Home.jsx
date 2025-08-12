import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaStore, FaConciergeBell, FaBoxes } from "react-icons/fa";

function Home({ onShowMenu }) {
  return (
    <section className="space-y-16">
      {/* Главный баннер */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Мы создаём настроение — вкусно и полезно
          </h2>
          <p className="text-gray-400 mb-6">
            Мы — современное предприятие, где традиции качественного питания сочетаются с инновациями.
            Каждое блюдо готовится с любовью и заботой о вашем здоровье.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onShowMenu}
              className="px-5 py-3 rounded-md bg-brand-orange text-white font-semibold shadow hover:brightness-110 transition"
            >
              Посмотреть меню
            </button>
            <a
              href="#contacts"
              className="px-5 py-3 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
            >
              Связаться
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Feature title="Собственное производство">
              Качество сырья, контроль на каждом этапе.
            </Feature>
            <Feature title="Гибкие условия">
              Оптовые поставки и кейтеринг на заказ.
            </Feature>
            <Feature title="Быстрая логистика">
              Оперативная доставка в нужные сроки.
            </Feature>
            <Feature title="Индивидуальная разработка">
              Разработаем блюда под ваши задачи.
            </Feature>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow flex items-center justify-center">
          <div className="w-full h-72 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
            Фото продукции / слайдер
          </div>
        </div>
      </div>

      {/* Новый блок — направления работы */}
      <BusinessSolutions />
    </section>
  )
}

function Feature({ title, children }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{children}</p>
    </div>
  )
}

function BusinessSolutions() {
  const solutions = [
    {
      icon: <FaUtensils className="text-brand-orange text-3xl" />,
      title: "Для ресторанов",
      desc: "Индивидуальные решения по поставке блюд, полуфабрикатов и готовой продукции.",
    },
    {
      icon: <FaStore className="text-brand-orange text-3xl" />,
      title: "Для сетей",
      desc: "Устойчивые поставки для магазинов и торговых точек любого масштаба.",
    },
    {
      icon: <FaConciergeBell className="text-brand-orange text-3xl" />,
      title: "Для кейтерингов",
      desc: "Разработка уникального меню и доставка прямо к мероприятию.",
    },
    {
      icon: <FaBoxes className="text-brand-orange text-3xl" />,
      title: "Для оптовиков",
      desc: "Гибкие условия сотрудничества для крупных партий продукции.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-white mb-8">Решения для бизнеса</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-brand-orange transition"
          >
            <div className="mb-4">{s.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-2">{s.title}</h4>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Home
