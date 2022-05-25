const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(link => {
  link.onclick = (e) => {
    e.preventDefault()
  }
})