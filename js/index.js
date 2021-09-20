window.addEventListener('load', () => {
    const links = [...document.querySelectorAll('.navbar a')];
    const mediaQueryDesktop = window.matchMedia('(min-width: 48.001rem)');

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
});

const toggleNavMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu');

    if (getComputedStyle(burgerMenu).getPropertyValue('display') === 'none') {
        return;
    }

    const navMenu = document.querySelector('.navlinks');
    if (getComputedStyle(navMenu).getPropertyValue('display') === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
};

const restoreDesktopNavmenu = () => {
    const navMenu = document.querySelector('.navlinks');
    navMenu.style.display = 'flex';    
};

const hideNavmenu = () => {
    const navMenu = document.querySelector('.navlinks');
    navMenu.style.display = 'none';    
};

