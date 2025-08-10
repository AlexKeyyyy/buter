import React, { useState } from 'react'

export default function Contacts(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  async function submit(e){
    e.preventDefault()
    // TODO: заменить на fetch('/api/contact') в проде
    console.log({name,phone,email,message})
    setSent(true)
    setName(''); setPhone(''); setEmail(''); setMessage('')
  }

  return (
    <section id="contacts">
      <h2 className="text-2xl font-serif mb-4">Контакты</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#071217] p-6 rounded-lg">
          <h3 className="font-semibold">Свяжитесь с нами</h3>
          <p className="text-gray-400 mt-2">Пишите на почту или звоните — ответим на все вопросы.</p>

          <div className="mt-4 text-sm text-gray-300">
            <div><strong>Электронная почта:</strong> buter@mail.ri</div>
            <div className="mt-1"><strong>Телефон:</strong> +0 123 456 7892</div>
            <div className="mt-1"><strong>Адрес:</strong> (укажите реальный адрес для сайта)</div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-[#071217] p-6 rounded-lg">
          <label className="block text-sm">Имя
            <input value={name} onChange={e=>setName(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-md bg-[#061018] border border-gray-700 text-gray-200" />
          </label>
          <label className="block text-sm mt-3">Телефон
            <input value={phone} onChange={e=>setPhone(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-md bg-[#061018] border border-gray-700 text-gray-200" />
          </label>
          <label className="block text-sm mt-3">E-mail
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-1 w-full px-3 py-2 rounded-md bg-[#061018] border border-gray-700 text-gray-200" />
          </label>
          <label className="block text-sm mt-3">Сообщение
            <textarea value={message} onChange={e=>setMessage(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-md bg-[#061018] border border-gray-700 text-gray-200" rows={4}></textarea>
          </label>
          <div className="mt-4 flex gap-3">
            <button type="submit" className="px-4 py-2 bg-brand-orange text-white rounded-md">Отправить</button>
            <button type="button" onClick={()=>{ setName(''); setPhone(''); setEmail(''); setMessage(''); }} className="px-4 py-2 border rounded-md">Очистить</button>
          </div>

          {sent && <div className="mt-3 text-sm text-green-400">Сообщение отправлено — мы свяжемся с вами.</div>}
        </form>
      </div>
    </section>
  )
}
