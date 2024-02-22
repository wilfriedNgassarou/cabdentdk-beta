'use client' ;
import { useEffect, useRef } from "react"

export default function TopButton() {
  const topButton = useRef(null) ;

  useEffect(() => {
    const header = topButton.current.closest('body').querySelector('.header') ;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        if(entrie.isIntersecting) {
          if(!topButton.current.classList.contains('top-button-hidden')) {
            topButton.current.classList.add('top-button-hidden');
          }

          return ;
          
        }
        
        topButton.current.classList.remove('top-button-hidden');
      })
    }, { threshold: 0.1 })

    observer.observe(header) ;


  }, [])

  return (
    <div ref={topButton} className="top-button top-button-hidden">
      <span>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12V16H11V12H8L12 8L16 12H13Z"></path></svg>
        </a>
      </span>
    </div>
  )
}
