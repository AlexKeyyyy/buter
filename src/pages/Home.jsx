import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaStore, FaConciergeBell, FaBoxes } from "react-icons/fa";

function Home({ onShowMenu }) {
  return (
    <section className="space-y-20">
      {/* Главный баннер */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Левый блок */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Мы создаём настроение — вкусно и полезно
          </h2>
          <p className="text-gray-400 mb-6">
            Мы — современное предприятие, где традиции качественного питания
            сочетаются с инновациями. Каждое блюдо готовится с любовью и заботой
            о вашем здоровье.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onShowMenu}
              className="px-5 py-3 rounded-md bg-brand-orange text-white font-semibold shadow hover:brightness-110 transition"
            >
              Посмотреть меню
            </button>
            <a
              href="mailto:info@buter.ru"
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

        {/* Фото справа */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow flex items-center justify-center"
        >
          <div className="w-full h-85 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}images/image.png`}
              alt="Логотип БуТерЪ"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Блок категорий */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {[
          { title: "Выпечка", img: "bakery.jpg" },
          { title: "Супы", img: "soups.jpg" },
          { title: "Горячее", img: "hot.jpg" },
          { title: "Закуски", img: "snacks.jpg" },
        ].map((item, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}images/${item.img}`}
              alt={item.title}
              className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Направления работы */}
      <BusinessSolutions />

      {/* Индивидуальные заказы */}
      <CustomOrder />
    </section>
  );
}

function Feature({ title, children }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{children}</p>
    </div>
  );
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-white mb-8">
        Решения для бизнеса
      </h3>
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
  );
}

function CustomOrder() {
  return (
    <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4 uppercase">
        Мы можем разработать блюда под индивидуальный запрос
      </h3>
      <p className="text-gray-400 mb-8">
        Наши талантливые технологи помогут в создании блюд конкретно под Ваши
        цели и задачи, а если нужные позиции уже есть в ассортименте, то бережно
        доставят их Вам в кратчайшие сроки.
      </p>
      <form className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Имя"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Телефон"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none"
        />
        <div className="md:col-span-3">
          <a
            href="mailto:info@buter.ru"
            className="block w-full px-5 py-3 rounded-md bg-brand-orange text-white font-semibold text-center shadow hover:brightness-110 transition"
          >
            Связаться с нами
          </a>
        </div>
      </form>
    </section>
  );
}

export default Home;
