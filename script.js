const slideShowContent = document.querySelectorAll('.slideshow-content');
let count = 1

setInterval(() => {
  if (count >= slideShowContent.length) {
    count = 0
  }
  slideShowContent.forEach((value, index) => {
    slideShowContent[index].classList.remove('active')
  })
  slideShowContent[count].classList.add('active')
  count++
},6000)