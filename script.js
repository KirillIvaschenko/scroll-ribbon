let packegeWithImages = document.querySelectorAll('.add')
// packegeWithImages = Array.from(packegeWithImages)
let size = 900;
let counter = 0
window.addEventListener('scroll',(e)=> {
  try {
    if(scrollY >= size && scrollY <= size+500) {
      Array.from(packegeWithImages)[counter].hidden = false
      size+=500;
      counter+=1;
    }
  } catch (e) {
    document.querySelector('h2').textContent = `The tape is over`
  }
})

