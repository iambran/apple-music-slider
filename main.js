const list = document.querySelector('.music-grid__list')
const listItems = document.querySelectorAll('.music-grid__list-item')
const listItemWidth = listItems[0].clientWidth
const gap = Number(window.getComputedStyle(list).getPropertyValue('--grid-column-gap').replace('px', '').trim())

console.log(listItemWidth, gap)
let nextButton = document.querySelector('.music-grid-nav__arrow--next')
nextButton.addEventListener('click', showNextSlide)
let previousButton = document.querySelector('.music-grid-nav__arrow--previous')
previousButton.addEventListener('click', showPreviousSlide)

const totalItems = listItems.length
const itemPerSlide = 3
function showNextSlide() {
  list.scrollLeft += (listItemWidth + gap) * itemPerSlide
}

function showPreviousSlide() {
  list.scrollLeft -= (listItemWidth + gap) * itemPerSlide
}

let firstItem = document.querySelector('.music-grid__list-item:first-child')
let lastItem = document.querySelector('.music-grid__list-item:last-child')

let options = {
  root: list,
  rootMargin: '0px',
  thredhold: 0.8
}

let observer = new IntersectionObserver(handleIntersect, options)
observer.observe(firstItem)
observer.observe(lastItem)

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (!entry.target.previousElementSibling) {
      if (entry.isIntersecting) {
        previousButton.style.display = 'none'
      } else {
        previousButton.style.display = 'block'
      }
    } else {
      if (entry.isIntersecting) {
        nextButton.style.display = 'none'
      } else {
        nextButton.style.display = 'block'
      }
    }
  })
}
