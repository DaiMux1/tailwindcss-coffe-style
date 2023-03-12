

const topMenu = document.getElementById('dlv-top-menu')
const toggleTopMenuIcon = document.getElementById('dlv-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // click to toggel top menu icon
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('dlv-topmenu-expanded')
  } else {
    // click outside from toggle top menu icon
    if (topMenu.classList.contains('dlv-topmenu-expanded')) {
      topMenu.classList.remove('dlv-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})