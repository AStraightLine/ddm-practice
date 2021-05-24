const exploreNav = document.getElementById('navItemExplore')
const exploreDD = document.getElementById('exploreDD')

const exploreNavHandler = (navItem, dropDownContainer) => {

    if (exploreDD.classList.contains('navItemOpen')) {
        navItem.classList.remove('navItemClicked')
        dropDownContainer.classList.remove('navItemOpen')
    } else if (!exploreNav.classList.contains('navItemOpen')) {
        navItem.classList.add('navItemClicked')
        dropDownContainer.classList.add('navItemOpen')
    }
}

exploreNav.addEventListener('click', function () {
    exploreNavHandler(exploreNav, exploreDD)
})