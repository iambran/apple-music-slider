const list = document.querySelector('.music-grid__list')
const listItems = document.querySelectorAll('.music-grid__list-item')
// 每张卡片的宽度 = 280
const listItemWidth = listItems[0].clientWidth
console.log(listItemWidth)
const gap = Number(window.getComputedStyle(list).getPropertyValue('--grid-column-gap').replace('px', ''))
console.log(gap)
const itemsPerSlide = Number(window.getComputedStyle(list).getPropertyValue('--grid-columns'))
console.log(itemsPerSlide)

const previousButton = document.querySelector('.music-grid__arrow--previous')
const nextButton = document.querySelector('.music-grid__arrow--next')

previousButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)

function showNextSlide() {
  list.scrollLeft += (listItemWidth + gap) * itemsPerSlide
}

function showPreviousSlide() {
  list.scrollLeft -= (listItemWidth + gap) * itemsPerSlide
}

// 使用intersectionObserver API
const firstItem = document.querySelector('.music-grid__list-item:first-child')
const lastItem = document.querySelector('.music-grid__list-item:last-child')

let options = {
  root: list,
  rootMarin: '0px',
  threshold: 0.8
}

let observer = new IntersectionObserver(handleIntersect, options)
observer.observe(firstItem)
observer.observe(lastItem)

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    // first item
    if (!entry.target.previousElementSibling) {
      if (entry.isIntersecting) {
        previousButton.style.display = 'none'
      } else {
        previousButton.style.display = 'block'
      }
    }
    else { // last item
      if (entry.isIntersecting) {
        nextButton.style.display = 'none'
      } else {
        nextButton.style.display = 'block'
      }
    }
  })
}
