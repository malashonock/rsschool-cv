const links = [...document.querySelectorAll('.navbar a')];
const mediaQueryDesktop = window.matchMedia('(min-width: 48.001rem)');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuIcon = burgerMenu.querySelector('span');
const navMenu = document.querySelector('.navlinks');

links.forEach((link) => {
    console.log(link);
    link.addEventListener('click', () => toggleNavMenu());
});

mediaQueryDesktop.addEventListener('change', (mediaQuery) => {
    if (mediaQuery.matches) {
        restoreDesktopNavmenu();
    } else {
        hideNavmenu();
    }
});

const toggleNavMenu = () => {
    if (getComputedStyle(burgerMenu).getPropertyValue('display') === 'none') {
        return;
    }

    if (getComputedStyle(navMenu).getPropertyValue('display') === 'block') {
        navMenu.style.display = 'none';
        setBurgerMenuIcon('burger');
    } else {
        navMenu.style.display = 'block';
        setBurgerMenuIcon('close');
    }
};

const restoreDesktopNavmenu = () => {
    navMenu.style.display = 'flex';    
    setBurgerMenuIcon('close');
};

const hideNavmenu = () => {
    navMenu.style.display = 'none';    
    setBurgerMenuIcon('burger');
};

const setBurgerMenuIcon = (iconType) => {
    switch (iconType) {
        case 'burger':
            burgerMenuIcon.className = 'fa fa-bars';
            break;
        case 'close':
            burgerMenuIcon.className = 'fa fa-times';
            break;
    }
};
