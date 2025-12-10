import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export function CookieBanner() {
  const [show, setShow] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted')
    if (!accepted) {
      setTimeout(() => setShow(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShow(false)
  }

  if (!show) return null

  const texts = {
    ro: {
      message: 'Acest site folosește cookie-uri pentru a îmbunătăți experiența ta.',
      accept: 'Accept'
    },
    en: {
      message: 'This site uses cookies to improve your experience.',
      accept: 'Accept'
    },
    ru: {
      message: 'Этот сайт использует cookie-файлы для улучшения вашего опыта.',
      accept: 'Принять'
    }
  }

  const text = texts[language]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-black border-t-2 border-[#6F3417] rounded-t-2xl">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <p className="text-white text-base sm:text-lg md:text-xl text-center sm:text-left flex-1">
          {text.message}
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[#6F3417] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#8B4A2A] transition-colors font-medium text-base sm:text-lg w-full sm:w-auto"
        >
          {text.accept}
        </button>
      </div>
    </div>
  )
}

