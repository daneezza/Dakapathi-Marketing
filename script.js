let lastScrollPosition = window.pageYOffset;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        header.classList.add('nav-hidden');
    } else {
        // Scrolling up
        header.classList.remove('nav-hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
});

