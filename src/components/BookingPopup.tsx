import { useState, useEffect } from 'react'
import { X, Calendar } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const BOOKING_URL = 'https://n1380884.alteg.io'

export function BookingPopup() {
  const [show, setShow] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const lastShown = localStorage.getItem('lastBookingPopup')
    const now = Date.now()
    const threeMinutes = 3 * 60 * 1000

    const checkPopup = () => {
      const lastShownTime = lastShown ? parseInt(lastShown) : 0
      if (!lastShown || now - lastShownTime > threeMinutes) {
        setShow(true)
        localStorage.setItem('lastBookingPopup', now.toString())
      }
    }

    // Проверяем сразу и затем каждые 3 минуты
    checkPopup()
    const interval = setInterval(() => {
      const currentTime = Date.now()
      const lastShownTime = localStorage.getItem('lastBookingPopup')
      if (!lastShownTime || currentTime - parseInt(lastShownTime) > threeMinutes) {
        setShow(true)
        localStorage.setItem('lastBookingPopup', currentTime.toString())
      }
    }, threeMinutes)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setShow(false)
  }

  if (!show) return null

  const texts = {
    ro: {
      title: 'Rezervă o tunsoare',
      subtitle: 'Nu rata ocazia de a arăta perfect!'
    },
    en: {
      title: 'Book a haircut',
      subtitle: 'Don\'t miss the chance to look perfect!'
    },
    ru: {
      title: 'Записаться на стрижку',
      subtitle: 'Не упустите возможность выглядеть идеально!'
    }
  }

  const text = texts[language]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="bg-black border-4 border-[#6F3417] rounded-2xl p-6 sm:p-8 md:p-12 max-w-lg w-full relative animate-fade-in shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <Calendar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#6F3417] mb-4 sm:mb-6" />
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 text-white px-2">
              {text.title}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-2">
              {text.subtitle}
            </p>
          </div>
          
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="block w-full bg-white text-black px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl md:text-2xl font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 rounded-xl"
          >
            {t.prices.bookButton}
          </a>
        </div>
      </div>
    </div>
  )
}

