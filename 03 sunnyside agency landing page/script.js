const hamMenu = document.querySelector('.ham-menu')
const hamMenuContainer = document.querySelector('.ham-menu-container')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    hamMenuContainer.classList.toggle('hidden')
})