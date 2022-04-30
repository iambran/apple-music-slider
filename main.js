const list = document.querySelector('.music-grid__list')
const listItems = document.querySelectorAll('.music-grid__list-item')
const listItemWidth = listItems[0].clientWidth
const gap = Number(window.getComputedStyle(list).getPropertyValue('--grid-column-gap').replace('px', '').trim())

console.log(listItemWidth, gap)
document.querySelector('.music-grid-nav__arrow--next').addEventListener('click', showNextSlide)
document.querySelector('.music-grid-nav__arrow--previous').addEventListener('click', showPreviousSlide)

const totalItems = listItems.length
const itemPerSlide = 5
let currentSlide = 1
const itemsHidden = () => {
  return totalItems - itemPerSlide * currentSlide
}

function showNextSlide() {
  list.scrollLeft += (listItemWidth + gap) * itemPerSlide
  console.log(itemsHidden())
}

function showPreviousSlide() {
  list.scrollLeft -= (listItemWidth + gap) * itemPerSlide
  console.log(itemsHidden())
}
