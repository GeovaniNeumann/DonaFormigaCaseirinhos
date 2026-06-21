import { useState, useEffect, useRef, useCallback } from 'react'
import { GALLERY_IMAGES } from '../../data/menuData'
import styles from './Gallery.module.css'

const AUTOPLAY_DELAY = 4500

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const isPaused = useRef(false)

  const total = GALLERY_IMAGES.length

  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total
      setActiveIndex(next)
    },
    [total]
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (isPaused.current) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, AUTOPLAY_DELAY)
    return () => clearInterval(timer)
  }, [total, activeIndex])

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
    isPaused.current = true
  }

  function handleTouchEnd(event) {
    if (touchStartX.current == null) return
    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 40

    if (deltaX > SWIPE_THRESHOLD) {
      goPrev()
    } else if (deltaX < -SWIPE_THRESHOLD) {
      goNext()
    }

    touchStartX.current = null
    isPaused.current = false
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.script}>direto da nossa cozinha</span>
          <h2>Feito com carinho, todos os dias</h2>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => {
            isPaused.current = true
          }}
          onMouseLeave={() => {
            isPaused.current = false
          }}
        >
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={goPrev}
            aria-label="Imagem anterior"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 4 6 12l9 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={styles.viewport}
            ref={trackRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {GALLERY_IMAGES.map((img) => (
                <div className={styles.slide} key={img.src}>
                  <div
                    className={styles.slideBackground}
                    style={{ backgroundImage: `url(${img.src})` }}
                    aria-hidden="true"
                  />
                  <img src={img.src} alt={img.alt} loading="lazy" className={styles.slideImage} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={goNext}
            aria-label="Próxima imagem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 4l9 8-9 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {GALLERY_IMAGES.map((img, index) => (
            <button
              key={img.src}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              aria-label={`Ir para imagem ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
