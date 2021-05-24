const exploreNav = document.getElementById('navItemExplore')

const exploreNavHandler = () => {
    const exploreDD = document.getElementById('exploreDD')

    if (exploreDD.classList.contains('navItemOpen')) {
        exploreNav.classList.remove('navItemClicked')
        exploreDD.classList.remove('navItemOpen')
    } else if (!exploreNav.classList.contains('navItemOpen')) {
        exploreNav.classList.add('navItemClicked')
        exploreDD.classList.add('navItemOpen')
    }
}

exploreNav.addEventListener('click', exploreNavHandler)