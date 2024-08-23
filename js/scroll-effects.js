document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollContents = document.querySelectorAll('.scroll-content');

    scrollContents.forEach((content, index) => {
        const depth = index * 200;
        const translateY = scrollTop * 0.5 - (window.innerHeight * index);
        const rotateY = scrollTop * 0.1;
        content.style.transform = `translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${depth}px)`;
    });
});

