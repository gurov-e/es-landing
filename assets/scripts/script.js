window.onload = () => { // добавление события полной загрузки страницы
  AOS.init({ // инициализация библиотеки AOS.js (Animate On Scroll — анимация по скроллу)
    duration: 800, // длительность анимации
    once: true, // показывается один раз
    offset: 100 // сколько от вершины элемента надо прокрутить, чтобы появилась анимация
  })

  const arrowDown = document.querySelector('.arrow__down') // получение DOM—элемента с классом .arrow__down

  arrowDown.addEventListener('click', () => { // добавление события по клику
    window.scrollBy({ // метод глобального объекта window, который 'прокручивает до'
      top: 900, // 'до' 900px от начала окна просмотра (от 0)
      behavior: 'smooth' // 'поведение' прокрутки (плавное)
    })
  })
}